export interface IApiShowsResponse {
    result: IShow[];
    meta: IPaginationMeta;
}

export interface IApiShowSearchResponse {
    score: number;
    show: IShow;
}

export interface IPaginationMeta {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number | null;
    prevPage: number | null;
};

export interface IShow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: IGenres['name'][];
    status: 'Running' | 'To Be Determined' | 'Ended';
    runtime: number;
    averageRuntime: number;
    premiered: Date;
    ended: null;
    officialSite: string;
    schedule: ISchedule;
    rating: IRating;
    weight: number;
    network: INetwork;
    webChannel: null;
    dvdCountry: null;
    externals: IExternals;
    image: IImages | null;
    summary: string;
    updated: number;
    _links: ILinks;
}

export interface ILinks {
    self: INextepisode;
    previousepisode: INextepisode;
    nextepisode: INextepisode;
}

export interface INextepisode {
    href: string;
}

export interface IExternals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
}

export interface IImages {
    medium: string;
    original: string;
}

export interface INetwork {
    id: number;
    name: string;
    country: ICountry;
    officialSite: string;
}

export interface ICountry {
    name: string;
    code: string;
    timezone: string;
}

export interface IRating {
    average: number;
}

export interface ISchedule {
    time: string;
    days: string[];
}

export interface IGenres {
    name: "All" | "Action" | "Science-Fiction" | "Drama" | "Fantasy" | "Thriller" | "Crime" | "Horror" | "Romance" | "Adventure" | "Espionage" | "Music" | "Mystery" | "Supernatural" | "Family" | "Anime",
    image: string
}