<script setup>
import { useFetch, useRoute, useRuntimeConfig } from "#app";
import ArticleContent from "~/components/articles/ArticleContent.vue";

const config = useRuntimeConfig();
const route = useRoute();

const { slug } = route.params;

const endpoint = `${config.public.statamicApi}/collections/articles/entries`;
const { data: article } = await useFetch(endpoint, {
  params: {
    "filter[slug:is]": slug,
  },
  key: `articles/${slug}`,
  transform: (response) => response.data[0],
});
</script>

<template>
  <div>
    <Head>
      <Title>{{ article.title }}</Title>
    </Head>

    <div>
      <div class="">
        <ArticleContent :article="article" class="col-span-3" />
      </div>
    </div>
  </div>
</template>
