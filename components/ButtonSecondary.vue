<script setup lang="ts">
import { computed, type PropType } from "vue";
import { type RouteLocationRaw } from "vue-router";

const props = defineProps({
  href: {
    type: [String, Object] as PropType<string | RouteLocationRaw>,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() =>
  props.disabled ? "border-gray-300 text-gray-300 cursor-default" : "border-blue-900 text-blue-900 cursor-pointer",
);
</script>

<template>
  <NuxtLink
    :href="href"
    class="flex w-fit items-center justify-center gap-2 rounded-md border-2 bg-white px-4 py-2 text-center"
    :class="classes"
  >
    <div>
      <slot />
    </div>
  </NuxtLink>
</template>
