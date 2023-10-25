<script setup>
import { computed } from "vue";
import get from "lodash/get";
import dayjs from "dayjs";
import TextBlock from "~/components/articles/Blocks/TextBlock.vue";
import YouTubeEmbed from "~/components/articles/Blocks/YouTubeEmbed.vue";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  preview: {
    type: Boolean,
    default: false,
  },
});

const featuredPhoto = computed(() => props.article.featured_photo);

const blockTypes = {
  text: TextBlock,
  youtube_embed: YouTubeEmbed,
};
</script>

<template>
  <div>
    <div class="bg-gray-200 px-5 py-6 drop-shadow-none">
      <div class="mx-auto flex max-w-3xl flex-col items-center">
        <h1 class="text-center text-2xl lg:text-4xl">
          {{ article.title }}
        </h1>

        <p class="my-4 text-lg">
          By {{ article.author?.name ?? "Gearbox" }} | {{ dayjs(article.date).format("M/D/YYYY") }}
        </p>

        <NuxtImg
          v-if="featuredPhoto && !preview"
          :src="featuredPhoto.url"
          :alt="featuredPhoto?.alt ?? article.title"
          class="aspect[16/10] overflow-hidden rounded-2xl border border-gray-300 shadow-lg"
          width="768"
          height="480"
          format="webp"
        />

        <img
          v-if="featuredPhoto && preview"
          :src="featuredPhoto.url"
          class="aspect[16/10] overflow-hidden rounded-2xl border border-gray-300 shadow-lg"
          width="768"
          height="480"
        />
      </div>
    </div>

    <div class="mx-auto max-w-3xl px-5">
      <div class="my-5">
        <div v-for="(block, index) in article.content" :key="index">
          <Component :is="get(blockTypes, block.type, 'text')" v-bind="block" />
        </div>
      </div>
    </div>
  </div>
</template>
