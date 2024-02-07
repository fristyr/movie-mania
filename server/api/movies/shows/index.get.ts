import { IApiShowsResponse, IPaginationMeta, IShow } from "~/types/tvmaze/shows";
import type { NitroRuntimeConfig } from "nitropack";

// Sorting function
function sortShows(shows: IShow[], direction: 'asc' | 'desc' | null): IShow[] {
  if (!direction) return shows;
  return shows.sort((a, b) => {
    const ratingA = a.rating?.average ?? 0;
    const ratingB = b.rating?.average ?? 0;
    return direction === 'asc' ? ratingA - ratingB : ratingB - ratingA;
  });
}

// Pagination function
function paginateShows(shows: IShow[], pageSize: number, pageNumber: number): { paginatedItems: IShow[], totalItems: number } {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return { paginatedItems: shows.slice(startIndex, endIndex), totalItems: shows.length };
}

// Meta information 
function buildPaginationMeta(totalItems: number, pageSize: number, pageNumber: number): IPaginationMeta {
  const totalPages = Math.ceil(totalItems / pageSize);
  return {
    totalItems,
    totalPages,
    currentPage: pageNumber,
    hasNextPage: pageNumber < totalPages,
    hasPrevPage: pageNumber > 1,
    nextPage: pageNumber < totalPages ? pageNumber + 1 : null,
    prevPage: pageNumber > 1 ? pageNumber - 1 : null,
  };
}

// Enhanced data fetching with Promise.all for multiple pages
async function fetchShowsFromApi(config: NitroRuntimeConfig, pages: number[]): Promise<IShow[]> {
  const fetchPromises = pages.map(page =>
    $fetch<IShow[]>(`${config.tvmazeApi.shows}?page=${page}`)
  );
  try {
    const results = await Promise.all(fetchPromises);
    // Flatten the array of arrays into a single array of shows
    return results.flat();
  } catch (error) {
    return []; // Return an empty array in case of error
  }
}

// Data fetching and response preparation
async function fetchAndPrepareShows(pagination: number, sort: 'asc' | 'desc' | null, pageSize: number): Promise<IApiShowsResponse> {
  const config = useRuntimeConfig();
  const cacheKey = 'shows';
  // Attempt to get cached data
  let shows = await useStorage<IShow[]>().getItem(cacheKey);
  // If cached is empty, fetch shows from the api and save to the cache
  if (!shows) {
    shows = await fetchShowsFromApi(config, [0, 1, 2]);
    await useStorage().setItem(cacheKey, shows);
  }

  const sortedShows = sortShows(shows, sort);
  const { paginatedItems, totalItems } = paginateShows(sortedShows, pageSize, pagination);
  const meta = buildPaginationMeta(totalItems, pageSize, pagination);

  return {
    result: paginatedItems,
    meta,
  };
}

// Event Handler Refactored in Functional Style
export default defineEventHandler(async (event) => {
  const { pagination = 1, sort, limit = 15 } = getQuery(event);
  return fetchAndPrepareShows(Number(pagination), sort as 'asc' | 'desc' | null, Number(limit));
});
