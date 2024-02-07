<script lang="ts" setup>
import type { IApiShowsResponse } from "~/types/tvmaze/shows";

const showsPage = ref(1);
const url = computed(
  () => `/api/movies/shows?pagination=${showsPage.value}&sort=desc`
);
const {
  data: shows,
  pending,
  error,
} = await useLazyFetch<IApiShowsResponse>(url);
</script>

<template>
  <h2 class="font-extrabold text-lg lg:text-2xl mb-6">Most popular shows</h2>
  <section v-if="shows">
    <div class="flex flex-row gap-4 overflow-y-scroll pb-4 mb-6">
      <ShowCard
        v-for="currentShow in shows.result.slice(4)"
        :key="currentShow.id"
        :show="currentShow"
      />
    </div>

    <div class="flex flex-col-reverse lg:flex-row items-center justify-between mb-12">
      <UPagination
        v-model="showsPage"
        :page-count="5"
        :total="shows.meta.totalPages"
        :disabled="pending"
        :prev-button="{
          icon: 'i-heroicons-arrow-small-left-20-solid',
          label: 'Prev',
          color: 'gray',
        }"
        :next-button="{
          icon: 'i-heroicons-arrow-small-right-20-solid',
          trailing: true,
          label: 'Next',
          color: 'gray',
        }"
        
       
      />

      <NuxtLink to="/tvshows" :event="pending" class="mb-6 lg:mb-0 ">
        <UButton :disabled="pending" variant="outline" color="primary" size="xl"
          >See more...</UButton
        >
      </NuxtLink>
    </div>
  </section>
  <section v-else-if="error">
    <h4>Soething went wrong...</h4>
  </section>
</template>
