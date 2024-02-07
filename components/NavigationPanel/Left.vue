<script lang="ts" setup>
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

const dynamicClass = (link: string) => {
  return currentRoute.value.fullPath === link
    ? "border-r-2 border-green-500 text-green-500"
    : "";
};

</script>

<template>
  <section class="flex-1 mt-6 ml-6">
    <div class="mb-12">
      <h2 class="font-extrabold text-2xl mb-6">Menu</h2>
      <NuxtLink v-for="link in menuNavigation" :key="link.id" :to="link.to">
        <div
          class="flex flex-1 flex-row items-center mr-2 mb-6"
          :class="dynamicClass(link.to)"
        >
          <UIcon :name="link.icon" class="w-8 h-8 mr-2" />
          <p class="text-lg">{{ link.title }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
