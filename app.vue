<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
    <NuxtLoadingIndicator />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  @apply bg-gray-100 dark:bg-gray-900;
  font-family: "Lato", sans-serif;
}
</style>
