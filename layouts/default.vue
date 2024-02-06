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
    <header class="p-2 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
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
    <main class="my-4">
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>

<style></style>
