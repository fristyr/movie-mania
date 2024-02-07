<script lang="ts" setup>
const isLeftMenuOpen = ref(false);
</script>

<template>
  <div>
    <header
      class="p-2 border-b-2 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <UContainer>
        <div class="flex items-center justify-between my-2 relative">
          <NuxtLink to="/">
            <UIcon
              name="i-arcticons-cinemark-theatres"
              class="text-primary-500 w-12 h-12"
            />
          </NuxtLink>

          <SearchBar />

          <div class="inline-flex justify-end gap-4 items-center">
            <ColorSwitcher />
          </div>
        </div>
      </UContainer>
    </header>
    <main>
      <UContainer
        :ui="{
          padding: 'px-0 sm:px-0 lg:px-0 ',
          constrained: 'max-w-[120rem]',
        }"
      >
        <section class="flex flex-row justify-center xl:justify-between">
          <aside
            class="hidden xl:flex flex-1 border-l-2 border-r-2 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <NavigationPanelLeft />
          </aside>

          <section>
            
            <UContainer
              :ui="{
                padding: 'px-4 sm:px-6 lg:px-8',
                constrained:
                  'max-w-[35rem] sm:max-w-[40rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-5xl 2xl:mx-w-3xl ',
              }"
            >
              <!-- Mobile Menu -->
              <section class="block xl:hidden">
                <NavigationPanelMobile />
              </section>
              <slot />
            </UContainer>
          </section>
          <aside
            class="hidden xl:flex flex-1 border-l-2 border-r-2 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <NavigationPanelRight />
          </aside>
        </section>
      </UContainer>
    </main>
    <footer
      class="min-h-32 border-t-2 border-2 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center"
    >
      <div>
        <h6 class="text-center">@MoovieMania</h6>

        <p>By Dennis Goncearuc (Fistyr)</p>
      </div>
    </footer>
  </div>
</template>

<style></style>
