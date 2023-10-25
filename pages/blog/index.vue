<script lang="ts" setup>
useHead({
  title: "Articles",
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-6xl pt-12">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Blog</h1>
      <p class="mt-2 text-lg leading-8 text-gray-600">Great insights into software development.</p>
    </div>

    <ArticlesList />
  </div>
</template>
