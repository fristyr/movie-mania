<script lang="ts" setup>
import { useRoute } from "vue-router";
import { genres } from "~/constants/genres";
import type { IApiShowsResponse, IGenres, IShow } from "~/types/tvmaze/shows";

const showsPage = ref(1);
const route = useRoute();
const selectedGenre = computed(() => route.query.genre as IGenres["name"]);

const url = computed(
  () => `/api/movies/shows?pagination=${showsPage.value}`
);

const { data: shows, refresh } = await useFetch<IApiShowsResponse>(url);

const filterShowsByGenre = computed(() => {
  const isGenreMatch = (show: IShow) =>
    selectedGenre.value === "All" || show.genres.includes(selectedGenre.value);
  if (!shows.value || !selectedGenre.value) return null;
  return shows.value.result.filter(isGenreMatch);
});

watch(selectedGenre, () => {
  refresh();
});

watch(showsPage, () => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section class="flex flex-1 my-6">
    <h1 class="font-extrabold text-2xl">Select your genre</h1>
  </section>

  <section>
    <div class="flex flex-row overflow-scroll pb-4 gap-4">
      <NuxtLink v-for="genre in genres" :to="`/genres?genre=${genre.name}`">
        <UCard
          :style="{
            background: `rgba(0, 0, 0, .70) no-repeat url(${genre.image})`,
            backgroundSize: 'cover',
          }"
          :ui="{
            base: `bg-blend-darken ${genre.name === selectedGenre ? 'border-2 border-green-500':''}`,
            rounded: 'rounded-2xl',
            header: {
              padding: 'pb-6',
            },
            body: {
              base: 'flex justify-center items-center min-h-24 border-none text-center',
            },
            footer: {
              base: 'border-none',
            },
          }"
        >
          <h4>{{ genre.name }}</h4>
        </UCard>
      </NuxtLink>
    </div>
  </section>

  <section v-if="shows">
    <h2 class="font-extrabold text-2xl my-6">TV Shows!</h2>
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      <ShowCard
        v-for="show in filterShowsByGenre"
        :key="show.id"
        :show="show"
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
