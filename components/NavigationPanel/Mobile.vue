<script lang="ts" setup>
import { genres } from "~/constants/genres";
import { menuNavigation } from "~/constants/navigation";
const { currentRoute } = useRouter();
</script>
<template>
  <div class="mt-4">
    <h2 class="font-extrabold text-2xl mb-6">Menu</h2>
    <div class="mt-4 flex flex-row justify-between space-x-8">
      <NuxtLink v-for="link in menuNavigation" :key="link.id" :to="link.to">
        <div
          class="flex flex-1 flex-row items-center pr-6 mr-2 mb-6"
          :class="currentRoute.path === link.to ? ' text-green-500' : ''"
        >
          <UIcon :name="link.icon" class="w-8 h-8 mr-2" />
          <p class="text-lg">{{ link.title }}</p>
        </div>
      </NuxtLink>
    </div>

    <h2 class="font-extrabold text-2xl mb-6">Genres</h2>
    <div class="grid grid-cols-4 gap-4">
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
          <h4>{{ genre.name }}</h4>
        </UCard>
      </NuxtLink>
      <NuxtLink to="/genres">
        <p class="text-sm flex flex-row mt-2">See more...</p>
      </NuxtLink>
    </div>
  </div>
</template>
