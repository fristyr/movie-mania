<script lang="ts" setup>
async function handleSignOut() {}

const dropdownItems = ref([
  [
    {
      label: "Profile",
      slot: "profile",
      disabled: true,
    },
  ],
  [
    {
      label: "Billing",
      icon: "i-heroicons-credit-card",
      click: () => {},
    },
  ],
  [
    {
      label: "Sign Out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: handleSignOut,
    },
  ],
]);
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
            <UDropdown :items="dropdownItems">
              <UIcon
                name="i-heroicons-user-circle"
                class="text-primary-500 w-6 h-6"
              />

              <template #profile>
                <div class="text-left">
                  <p>Sign in as</p>
                </div>
              </template>
            </UDropdown>
          </div>
        </div>
      </UContainer>
    </header>
    <main>
      <section class="flex flex-row justify-between">
        <aside
          class="flex flex-1 border-l-2 border-r-2 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <NavigationPanelLeft />
        </aside>
        <section >
          <UContainer
            :ui="{
              constrained: 'max-w-6xl',
            }"
          >
            <slot />
          </UContainer>
        </section>
        <aside
          class="flex flex-1 border-l-2 border-r-2 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <NavigationPanelRight />
        </aside>
      </section>
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
