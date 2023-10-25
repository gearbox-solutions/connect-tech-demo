<script lang="ts" setup>
import { nextTick, ref } from "vue";
import axios from "axios";

const props = defineProps(["title", "url"]);

const embedHtml = ref<string>("");
const youtubeLoaded = ref<boolean>(false);

const getYoutubeThumbnailImage = () => {
  let videoId = "";
  const { url } = props;

  if (/youtube.com\/watch\?(?:[a-zA-Z0-9\&\=]*)?(?:v=([a-zA-Z0-9\_\-]*))(&[a-zA-Z0-9\&\=]*)?/.test(url)) {
    [, videoId] = url.match(/youtube.com\/watch\?(?:[a-zA-Z0-9\&\=]*)?(?:v=([a-zA-Z0-9\_\-]*))(?:&[a-zA-Z0-9\&\=]*)?/);
  }

  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

async function getEmbedUrl() {
  const result = await axios("https://www.youtube.com/oembed", {
    params: {
      url: props.url,
      format: "json",
    },
  });

  embedHtml.value = result.data.html;
  nextTick(() => {
    setTimeout(() => {
      youtubeLoaded.value = true;
    }, 100);
  });
}
</script>

<template>
  <div class="mx-auto my-5 max-w-4xl overflow-hidden rounded-lg border-4 border-gray-300">
    <div id="container" class="cursor-pointer">
      <button
        v-show="!youtubeLoaded"
        class="absolute h-full w-full transition-opacity"
        aria-label="Click to play YouTube Video"
        @click="getEmbedUrl"
      >
        <img :src="getYoutubeThumbnailImage()" :alt="title || 'YouTube Video Thumbnail'" class="h-full w-full" />

        <svg
          height="100%"
          version="1.1"
          viewBox="0 0 68 48"
          width="100%"
          class="absolute left-[calc(50%-34px)] top-[calc(50%-24px)] h-[48px] w-[68px]"
        >
          <path
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#f00"
          ></path>

          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg>
      </button>

      <div v-show="youtubeLoaded" v-html="embedHtml" />
    </div>
  </div>
</template>

<style scoped>
#container {
  position: relative;
  padding-bottom: 56.25%;
}

:deep(#container iframe) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
