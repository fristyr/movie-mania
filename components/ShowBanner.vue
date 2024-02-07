<script lang="ts" setup>
import type { IShow } from "~/types/tvmaze/shows";

defineProps<{ shows: IShow[] }>();
</script>

<template>
  <UCarousel
    :items="shows"
    :ui="{
      item: 'basis-full',
    }"
    class="w-full max-h-[45rem] md:max-h-auto rounded-2xl overflow-hidden shadow ring-1 ring-gray-200 dark:ring-gray-800"
    indicators
    arrows
  >
    <template #default="{ item: show }: { item: IShow }">
      <article class="flex flex-row">
        <div>
          <NuxtImg
            :src="
              show.image && show.image.medium
                ? show.image.medium
                : 'https://placehold.co/100x100'
            "
            class="xl:w-[10rem] 2xl:w-[20rem] xl:h 2xl:h-full pt-8 2xl:pt-0"
            fit="cover"
          />
        </div>

        <div class="flex-1 p-6">
          <h1 class="font-lato font-extrabold text-2xl mb-4">
            {{ show.name }}
          </h1>

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

          <div class="flex flex-row items-center justify-between mb-4">
            <div class="flex flex-row">
              <h4 class="mr-2">Genres:</h4>
              <span
                v-for="(genre, index) in show.genres"
                :key="genre + index"
                class="mr-2"
              >
                {{ genre }}
              </span>
            </div>
            <h4>Country: {{ show.network.country.name }}</h4>
          </div>

          <div
            class="mr-12 mb-4 2xl:max-w-[90%] xl:text-sm 2xl:text-lg"
            v-html="show.summary"
          ></div>

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
                class="flex-[0.5] items-center justify-center px-4 py-4 rounded-2xl font-extrabold"
                >Watch
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </article>
    </template>

    <template #indicator="{ onClick, index, active }">
      <UButton
        :variant="active ? 'solid' : 'outline'"
        size="2xs"
        class="rounded-full min-w-6 justify-center"
        @click="onClick(index)"
      />
    </template>
  </UCarousel>
</template>
