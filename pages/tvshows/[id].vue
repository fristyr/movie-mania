<script lang="ts" setup>
import type { IShow } from "~/types/tvmaze/shows";

const route = useRoute();
const url = computed(
  () => `http://localhost:3000/api/movies/shows/${route.params.id}`
);
const { data: show } = await useFetch<IShow>(url);
</script>

<template>
  <section v-if="show">
    <div class="flex flex-1 flex-row my-6">
      <NuxtImg
        :src="
          show.image && show.image.medium
            ? show.image.medium
            : 'https://placehold.co/100x100'
        "
        width="370"
        height="490"
        fit="cover"
      />

      <div class="flex-1 p-12">
        <h1 class="font-lato font-extrabold text-2xl mb-4">{{ show.name }}</h1>

        <div class="mr-12 mb-4" v-html="show.summary"></div>

        <div class="flex flex-row items-center justify-between mb-4">
          <h4 class="font-lato text-md">Premiered: {{ show.premiered }}</h4>
          <h4 class="flex items-center justify-center">
            <span class="mr-2">Status:</span>
            <UIcon
              name="i-heroicons-globe-americas-solid mr-1"
              :class="statusColor(show.status)"
            />
            <span :class="statusColor(show.status)">{{ show.status }}</span>
          </h4>
        </div>

        <div class="space-y-6 mb-6">
          <p>Rating: {{ show.rating.average }}</p>
          <p>Language: {{ show.language }}</p>
          <p>Type: {{ show.type }}</p>
          <p>Network: {{ show.network.name }}</p>
          <p>Country: {{ show.network.country.name }}</p>
          <p>
            <span>Genre: </span>
            <span
              v-for="(genre, index) in show.genres"
              :key="genre + index"
              class="mr-2"
            >
              * {{ genre }}
            </span>
          </p>
        </div>

        <div class="flex flex-row items-center space-x-4">
          <UButton
            icon="i-heroicons-plus-solid"
            size="sm"
            color="primary"
            square
            variant="soft"
            :padded="false"
            class="px-4 py-4 opacity-85 rounded-2xl"
          />
          <UButton
            color="primary"
            variant="solid"
            :padded="false"
            class="flex-[0.5] items-center justify-center px-4 py-4 rounded-2xl font-extrabold"
            >Watch
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
