<script lang="ts" setup>
import type { IApiShowsResponse } from "~/types/tvmaze/shows";

const showsPage = ref(1);
const currentSort = ref(0);
const url = computed(
  () => `/api/movies/shows?pagination=${showsPage.value}&limit=25`
);

const items = [
  {
    label: "All shows",
    icon: "i-heroicons-film",
    type: "all-shows",
  },
  {
    label: "Rating ASC",
    icon: "i-heroicons-bars-arrow-down-solid",
    type: "rating-asc",
  },
  {
    label: "Running DESC",
    icon: "i-heroicons-bars-arrow-up-solid",
    type: "rating-desc",
  },
  {
    label: "Running Only",
    icon: "i-heroicons-globe-europe-africa",
    type: "running",
  },
];

const { data: shows } = await useFetch<IApiShowsResponse>(url);

const filteredData = computed(() => {
  const item = items[currentSort.value];
  if (shows.value) {
    switch (item.type) {
      case "all-shows":
        return shows.value.result;
      case "rating-asc":
        return shows.value.result.sort(
          (a, b) => (a.rating.average ?? 0) - (b.rating.average ?? 0)
        );
      case "rating-desc":
        return shows.value.result.sort(
          (a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0)
        );
      case "running":
        return shows.value.result.filter((show) => show.status === "Running");

      default:
        return shows.value.result;
    }
  }
});

watch(showsPage, () => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <section>
    <h2 class="font-extrabold text-2xl mb-6 mt-6">TV shows</h2>
  </section>

  <section v-if="shows">
    <UTabs
      :items="items"
      class="w-full mb-6"
      :default-index="0"
      @change="(index) => (currentSort = index)"
    >
      <template #default="{ item }">
        <div class="flex items-center gap-2 relative truncate">
          <UIcon :name="item.icon" class="w-4 h-4" />

          <span class="truncate">{{ item.label }}</span>
        </div>
      </template>
    </UTabs>

    <div class="grid grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
      <ShowCard
        v-for="currentShow in filteredData"
        :key="currentShow.id"
        :show="currentShow"
      />
    </div>

    <div class="flex flex-row justify-center items-center mb-12">
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
        size="xl"
      />
    </div>
  </section>
</template>
