<script lang="ts" setup>
import { genres } from "~/constants/genres";
</script>

<template>
  <section class="flex-1 mt-6 mx-6">
    <div class="mb-6 mr-6 flex flex-row items-center justify-between">
      <h2 class="font-extrabold text-2xl">Genres</h2>
      <NuxtLink to="/genres" class="hidden 2xl:block">
        <p class="text-sm flex flex-row items-center justify-center">
          See more...
        </p>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
      <NuxtLink
        v-for="genre in genres.slice(1, 5)"
        :to="`/genres?genre=${genre.name}`"
        class="genre-item"
      >
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
          <h4 class="text-white font-extrabold">{{ genre.name }}</h4>
        </UCard>
      </NuxtLink>
    </div>

    <NuxtLink to="/genres" class="block 2xl:hidden">
      <p class="text-sm flex flex-row mt-2">See more...</p>
    </NuxtLink>
  </section>
</template>
