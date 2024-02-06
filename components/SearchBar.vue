<script lang="ts" setup>
import { refDebounced } from "@vueuse/core";
import type { IApiShowSearchResponse, IShow } from "~/types/tvmaze/shows";
const searchPanelVisible = ref(false);
const searchInput = ref("");
const debounced = refDebounced(searchInput, 400);

const url = computed(
  () => `http://localhost:3000/api/movies/search?q=${debounced.value}`
);

const { data: searchShows } = await useFetch<IApiShowSearchResponse[]>(url);


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
      @blur="searchPanelVisible = false"
    />

    <div
      v-if="searchPanelVisible"
      class="absolute left-0 top-20 rounded-2xl bg-white dark:bg-gray-800 h-[31vw] w-full z-[99999] shadow ring-1 ring-gray-200 dark:ring-gray-800 px-12 py-8 border-2"
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

      <div class="overflow-auto max-h-[22vw] space-y-8">
        <div v-for="item in searchShows" :key="item.show.id" class="flex flex-row items-center">
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
              <li v-for="(genre , index) in item.show.genres" :key="genre + index">
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
        </div>
      </div>
    </div>
  </section>
</template>
