<script lang="ts" setup>
import { genres } from "~/constants/genres";

const { currentRoute } = useRouter();

const menuNavigation = [
  {
    id: 1,
    to: "/",
    title: "Home",
    icon: "i-heroicons-home",
  },
  {
    id: 2,
    to: "/tvshows",
    title: "Shows",
    icon: "i-heroicons-film",
  },
  {
    id: 3,
    to: "/genres?genre=All",
    title: "Genres",
    icon: "i-heroicons-user-group-solid",
  },
];
</script>
<template>
  <div class="mt-4">
    <h2 class="font-extrabold text-xl lg:text-2xl mb-6">Menu</h2>
    <div class="mt-4 flex flex-row justify-between lg:space-x-8">
      <NuxtLink v-for="link in menuNavigation" :key="link.id" :to="link.to">
        <div
          class="flex flex-1 flex-row items-center pr-6 lg:mr-2 mb-6"
          :class="currentRoute.fullPath === link.to ? ' text-green-500' : ''"
        >
          <UIcon :name="link.icon" class="w-4 h-4 mr-2" />
          <p class="text-md">{{ link.title }}</p>
        </div>
      </NuxtLink>
    </div>

    <h2 class="font-extrabold text-xl lg:text-2xl mb-6">Genres</h2>
    <div class="genres-quick-list grid grid-cols-4 gap-2 lg:gap-4">
      <NuxtLink
        v-for="genre in genres.slice(1, 5)"
        :to="`/genres?genre=${genre.name}`"
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
          <h4 class="text-md text-white">{{ genre.name }}</h4>
        </UCard>
      </NuxtLink>
      <NuxtLink to="/genres?genre=All" class="search-more-button mb-4 lg:mb-0">
        <p class="text-sm flex flex-row mt-2">See more...</p>
      </NuxtLink>
    </div>
  </div>
</template>
