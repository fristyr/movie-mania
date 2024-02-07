<script lang="ts" setup>
import type { IApiShowsResponse } from "~/types/tvmaze/shows";

const {
  pending,
  data: shows,
  error,
} = await useFetch<IApiShowsResponse>(
  "/api/movies/shows?pagination=1&sort=desc"
);
</script>

<template>
  <section class="hidden lg:block my-8">
    <ShowBannerSkeleton v-if="pending" />
    <ShowBanner v-else-if="shows" :shows="shows.result.slice(0, 4)" />
    <div v-else-if="error">
      <h4>Soething went wrong...</h4>
    </div>
  </section>
</template>
