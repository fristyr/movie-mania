<template>
  <div
    class="flex shadow ring-1 ring-gray-200 dark:ring-gray-800 rounded-2xl overflow-hidden"
  >
    <USkeleton class="h-[25rem] w-[22rem]" :ui="{ rounded: 'rounded-none ' }" />
    <div class="p-12 flex-1">
      <USkeleton class="h-4 w-[10rem] mb-4" />
      <div class="flex flex-row justify-between mb-4">
        <USkeleton class="h-4 w-[10rem]" />
        <USkeleton class="h-4 w-[10rem]" />
      </div>

      <div class="flex flex-row justify-between mb-4">
        <USkeleton class="h-4 w-[15rem]" />
        <USkeleton class="h-4 w-[15rem]" />
      </div>

      <USkeleton class="h-32 w-full mb-4" />

      <div class="flex flex-row mb-4 space-x-4">
        <USkeleton class="h-12 w-[3rem]" />
        <USkeleton class="h-12 w-[10rem]" />
      </div>
    </div>
  </div>
</template>
