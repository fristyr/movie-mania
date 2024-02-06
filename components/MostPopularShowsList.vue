<script lang="ts" setup>
import type { IApiShowsResponse } from "~/types/tvmaze/shows";

const showsPage = ref(1);
const currentSort = ref(0);
const url = computed(
  () =>
    `http://localhost:3000/api/movies/shows?pagination=${showsPage.value}&sort=desc`
);
const { data: shows } = await useFetch<IApiShowsResponse>(url);

const items = [
 
  {
    label: "Rating",
    icon: "i-heroicons-arrow-trending-down-solid",
    type: "rating-down",
  },
  {
    label: "Running Only",
    icon: "i-heroicons-globe-americas-solid",
    type: "ongoing-shows",
  },
];

/* const filteredData = computed(() => {
  const item = items[currentSort.value];
  if (shows.value) {
    switch (item.type) {
      
      case "Rating Down":
        return shows.value.result.sort((a,b) => (a.rating.average ?? 0) - (b.rating.average ?? 0));;
    

      case "ongoing-shows":
        return shows.value.result.filter((show) => show.status === "Running");

      default:
        return shows.value.result;
    }
  } 
}); */

</script>

<template>
  <section class="mb-24" v-if="shows">
    <h2 class="font-extrabold text-2xl mb-6">Most popular shows</h2>

    <div>
     <!--  <UTabs
        :items="items"
        class="w-1/2 mb-6"
        :default-index="0"
        @change="(index) => currentSort = index"
      >
        <template #default="{ item }">
          <div class="flex items-center gap-2 relative truncate">
            <UIcon :name="item.icon" class="w-4 h-4" />

            <span class="truncate">{{ item.label }}</span>
          </div>
        </template>
      </UTabs> -->
      <div class="flex flex-row gap-4 overflow-y-scroll pb-4">
        <ShowCard
          v-for="currentShow in shows.result.slice(4)"
          :key="currentShow.id"
          :show="currentShow"
        />
      </div>

      <div class="flex flex-row items-center justify-between">
        <UPagination
          v-model="showsPage"
          :page-count="5"
          :total="shows.meta.totalPages"
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

        <NuxtLink to="/tvshows">
          <UButton variant="outline" color="primary" >See more...</UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
