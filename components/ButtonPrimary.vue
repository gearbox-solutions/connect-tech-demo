<script setup>
const props = defineProps({
  href: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink
    :href="href"
    class="flex w-fit items-center justify-center gap-2 rounded-md border-2 border-blue-700 bg-blue-700 px-4 py-2 text-center text-white hover:bg-blue-800"
  >
    <div>
      <slot />
    </div>
  </NuxtLink>
</template>
