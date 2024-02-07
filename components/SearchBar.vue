<script lang="ts" setup>
import { refDebounced } from "@vueuse/core";
import type { IApiShowSearchResponse } from "~/types/tvmaze/shows";

const router = useRouter();
const searchPanelVisible = ref(false);
const searchInput = ref("");
const debounced = refDebounced(searchInput, 400);
const searchPanelVisibleDebounced = refDebounced(searchPanelVisible, 300);

const url = computed(() => `/api/movies/search?q=${debounced.value}`);

const {
  data: searchShows,
  pending,
  error,
} = await useLazyFetch<IApiShowSearchResponse[]>(url);

const selectSearchResult = (showId: number) => {
  searchPanelVisible.value = false; //
  searchInput.value = "";
  router.push(`/tvshows/${showId}`);
};
</script>

<template>
  <section class="flex-[0.5]">
    <UInput
      v-model="searchInput"
      color="primary"
      variant="outline"
      placeholder="Search..."
      size="lg"
      icon="i-heroicons-magnifying-glass-20-solid"
      @focus="searchPanelVisible = true"
      @blur="searchPanelVisibleDebounced = false"
      class="search-bar"
    />

    <div
      v-if="searchPanelVisible"
      class="search-bar-results absolute left-0 top-20 rounded-2xl bg-white dark:bg-gray-800 h-[70vh] xl:h-[60vh] w-full z-[99999] shadow ring-1 ring-gray-200 dark:ring-gray-800 px-12 py-8 border-2"
    >
      <div class="flex flex-row items-center justify-between">
        <h2 class="font-extrabold text-2xl mb-12">Your search results!</h2>
        <UButton
          icon="i-heroicons-x-mark-solid"
          size="sm"
          color="primary"
          square
          class="px-4 py-4 rounded-2xl"
          variant="outline"
          :padded="false"
          @click="searchPanelVisible = false"
        />
      </div>

      <div class="search-bar-results-container overflow-auto max-h-[60vh] xl:max-h-[40vh] h-full space-y-8">
        <div v-if="pending" class="flex items-center space-x-4">
          <USkeleton
            class="h-12 w-12"
            :ui="{
              rounded: 'rounded-lg',
              background: 'bg-green-300 dark:bg-green-500',
            }"
          />
          <div class="space-y-2">
            <USkeleton
              class="h-4 w-[250px]"
              :ui="{ background: 'bg-green-300 dark:bg-green-500' }"
            />
            <USkeleton
              class="h-4 w-[200px]"
              :ui="{ background: 'bg-green-300 dark:bg-green-500' }"
            />
          </div>
        </div>
        <NuxtLink
          v-else-if="searchShows"
          v-for="item in searchShows"
          :key="item.show.id"
          @click="selectSearchResult(item.show.id)"
          class="search-result flex flex-row items-center cursor-pointer"
        >
          <img
            :src="
              item.show.image && item.show.image.medium
                ? item.show.image.medium
                : 'https://placehold.co/100x100'
            "
            class="w-[100px] h-[100px] object-cover mr-4"
          />
          <div>
            <h5 class="font-extrabold text-xl">{{ item.show.name }}</h5>

            <ul class="list-disc pl-4 flex flex-row space-x-8">
              <li
                v-for="(genre, index) in item.show.genres"
                :key="genre + index"
              >
                {{ genre }}
              </li>
            </ul>

            <div class="flex flex-row items-center mb-4">
              <UIcon
                name="i-heroicons-globe-americas-solid mr-2"
                :class="statusColor(item.show.status)"
              />
              <span :class="statusColor(item.show.status)">{{
                item.show.status
              }}</span>
            </div>
          </div>
        </NuxtLink>
        <div v-else-if="error">
          <h4>Soething went wrong...</h4>
        </div>

        <div v-if="!searchShows?.length">
          <p>No results... Start Typing</p>
        </div>
      </div>
    </div>
  </section>
</template>
