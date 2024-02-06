<script lang="ts" setup>
import type { IShow } from "~/types/tvmaze/shows";

const props = defineProps<{ shows: IShow[] }>();

const statusColor = (showStatus: IShow["status"]) => {
  switch (showStatus) {
    case "Running":
      return "text-green-500";
    case "To Be Determined":
      return "text-yellow-500";
    case "Ended":
      return "text-red-600";
    default:
      return "text-white";
  }
};
</script>

<template>
  <UCarousel
    :items="shows"
    :ui="{
      item: 'basis-full',
    }"
    class="w-full rounded-2xl overflow-hidden shadow ring-1 ring-gray-200 dark:ring-gray-800"
    indicators
    arrows
  >
    <template #default="{ item }: { item: IShow }">
      <article class="flex flex-row">
        <div>
          <NuxtImg
            :src="
              item.image && item.image.medium
                ? item.image.medium
                : 'https://placehold.co/100x100'
            "
            width="370"
            height="490"
            fit="cover"
          />
        </div>

        <div class="flex-1 p-12">
          <h1 class="font-lato font-extrabold text-2xl mb-4">Braking Bads</h1>

          <div class="flex flex-row items-center justify-between mb-4">
            <h4 class="font-lato text-md">Premiered: 2005-02-21</h4>
            <h4 class="flex items-center justify-center">
              <span class="mr-2">Status:</span>
              <UIcon
                name="i-heroicons-globe-americas-solid mr-1"
                :class="statusColor(item.status)"
              />
              <span :class="statusColor(item.status)">{{ item.status }}</span>
            </h4>
          </div>

          <div class="flex flex-row items-center justify-between mb-4">
            <div class="flex flex-row">
              <h4 class="mr-2">Genres:</h4>
              <span v-for="(genre, index) in item.genres" :key="genre + index" class="mr-2">
                {{ genre }}
              </span>
            </div>
            <h4>Country: United States</h4>
          </div>

          <div class="mr-12 mb-4" v-html="item.summary"></div>

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
