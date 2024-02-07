<script lang="ts" setup>
import type { IShow } from "~/types/tvmaze/shows";
import { statusColor } from "../utils/status-color";

defineProps<{ show: IShow }>();
</script>
<template>
  <UCard
    :style="{
      background: `rgba(0, 0, 0, .70) no-repeat url(${
        show.image && show.image.medium
          ? show.image.medium
          : 'https://placehold.co/100x100'
      })`,
      backgroundSize: 'cover',
    }"
    :ui="{
      base: 'bg-blend-darken',
      rounded: 'rounded-2xl',
      header: {
        padding: 'pb-6',
      },
      body: {
        base: 'border-none min-h-52',
      },
      footer: {
        base: 'border-none',
      },
    }"
    class="min-w-64 show-card"
  >
    <template #header>
      <h4 class="font-lato font-extrabold text-lg text-white truncate">
        {{ show.name }}
      </h4>
      <div class="flex flex-row items-center">
        <UIcon name="i-heroicons-star-solid mr-2" class="text-white" />
        <span class="text-white">{{ show.rating.average }}</span>
      </div>
    </template>

    <div>
      <div class="flex flex-row items-center mb-4">
        <UIcon
          name="i-heroicons-globe-americas-solid mr-2"
          :class="statusColor(show.status)"
        />
        <span :class="statusColor(show.status)">{{ show.status }}</span>
      </div>
      <ul class="text-white list-disc pl-4">
        <li v-for="(genre, index) in show.genres" :key="genre + index">
          {{ genre }}
        </li>
      </ul>
    </div>

    <template #footer>
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
        <NuxtLink :to="`/tvshows/${show.id}`">
          <UButton
            color="primary"
            variant="solid"
            :padded="false"
            class="flex-1 items-center justify-center px-4 py-4 rounded-2xl font-extrabold"
            >Watch
          </UButton>
        </NuxtLink>
      </div>
    </template>
  </UCard>
</template>

<style></style>
