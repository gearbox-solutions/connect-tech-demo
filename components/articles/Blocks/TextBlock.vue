<script setup>
import { onMounted } from "vue";

// Code Highlighting
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github.css";

const props = defineProps(["text"]);
onMounted(() => {
  hljs.highlightAll();
});
</script>

<template>
  <div v-html="text"></div>
</template>

<style scoped>
:deep(h1) {
  @apply my-5 text-4xl font-bold text-blue-700;
}

:deep(h2) {
  @apply my-2 text-3xl font-bold text-blue-700;
}

:deep(h3) {
  @apply mb-2 mt-8 text-3xl text-blue-700;
}
:deep(h4) {
  @apply mb-2 mt-8 text-2xl text-gray-700;
}

:deep(a) {
  @apply text-blue-700 underline;
}

:deep(blockquote) {
  @apply mx-5 rounded-md border border-gray-300 bg-gray-100 px-2;
}

:deep(ul) {
  @apply ml-5;
}

:deep(ul li) {
  @apply list-disc;
}

:deep(ol) {
  @apply ml-5;
}

:deep(ol li) {
  @apply list-decimal;
}

:deep(p) {
  @apply my-4;
}

:deep(table) {
  @apply rounded-md border border-gray-300 bg-gray-100;
}

:deep(table th) {
  @apply border-b-2 border-gray-300 p-2;
}

:deep(table td) {
  @apply p-2;
}

:deep(img) {
  @apply mx-auto my-5;
}

:deep(pre) {
  @apply overflow-hidden rounded-md border-2 bg-gray-500;
}

:deep(code) {
  @apply rounded-md border border-gray-300 bg-gray-100 p-1 text-sm text-red-900;
}
</style>
