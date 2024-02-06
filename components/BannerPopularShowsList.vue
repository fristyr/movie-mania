<script lang="ts" setup>
import type { IApiShowsResponse } from "~/types/tvmaze/shows";

const { pending, data: shows } = await useFetch<IApiShowsResponse>(
  "http://localhost:3000/api/movies/shows?pagination=1&sort=desc", 
);
</script>

<template>
  <section class="mb-8">
    <ShowBannerSkeleton v-if="pending" />
    <ShowBanner v-else-if="shows" :shows="shows.result.slice(0, 4)" />
  </section>
</template>
