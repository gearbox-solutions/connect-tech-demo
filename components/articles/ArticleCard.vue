<script setup>
import { computed } from "vue";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const articleLink = computed(() => `/blog/${props.article.slug}`);
</script>

<template>
  <div class="mt-5 overflow-hidden p-4 drop-shadow-lg">
    <div class="items grid gap-5 md:grid-cols-12">
      <div class="md:col-span-4">
        <NuxtLink :href="articleLink" :aria-label="article.title">
          <NuxtImg
            :src="article.featured_photo?.url ?? 'articles/default-cover-image.jpg'"
            width="386"
            height="241"
            format="webp"
            :alt="article.featured_photo?.alt ?? article.title"
            class="mx-auto aspect-[16/10] rounded-lg border border-gray-300 object-cover object-center"
          />
        </NuxtLink>
      </div>

      <div class="flex max-w-xl flex-col md:col-span-8">
        <div class="flex w-full justify-between">
          <div class="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <NuxtLink :href="articleLink" class="hover:text-blue-800 hover:underline">
              {{ article.title }}
            </NuxtLink>
          </div>
        </div>

        <div class="mt-5 text-sm leading-6 text-gray-600">
          {{ article.excerpt }}
        </div>

        <div class="grow" />

        <div class="mt-4 w-full flex-row items-center justify-between md:flex lg:mt-0">
          <ButtonPrimary right-arrow :href="articleLink" class="md:self-end"> Keep Reading </ButtonPrimary>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  /* … */
  .line-clamp {
    -webkit-line-clamp: 4;
  }
}

@media (min-width: 0px) {
  /* … */
  .line-clamp {
    -webkit-line-clamp: 7;
  }
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
