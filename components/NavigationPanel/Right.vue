<script lang="ts" setup>
import { genres } from "~/constants/genres";
</script>

<template>
  <section class="flex-1 mt-6 ml-6">
    <div class="mb-6 mr-6 flex flex-row items-center justify-between">
      <h2 class="font-extrabold text-2xl">Genres</h2>
      <NuxtLink to="/genres">
        <p class="text-sm flex flex-row items-center justify-center">
          See more...
        </p>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <NuxtLink v-for="genre in genres.slice(1,5)" :to="`/genres?genre=${genre.name}`">
        <UCard
          :style="{
            background: `rgba(0, 0, 0, .60) no-repeat url(${genre.image})`,
            backgroundSize: 'cover',
          }"
          :ui="{
            base: 'bg-blend-darken',
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
</template>
