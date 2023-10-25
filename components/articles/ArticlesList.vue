<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useFetch, useRuntimeConfig } from "#imports";
import ArticleCard from "~/components/articles/ArticleCard.vue";

const config = useRuntimeConfig();

const endpoint = `${config.public.statamicApi}/collections/articles/entries`;

// In order to make the request update with searching/pagination we can't use the options to set query parameters
const { data: articlesRequest } = await useFetch<ArticlesRequest>(endpoint, {
  params: {
    limit: 10,
    page: 1,
    sort: "-date",
    fields: "title,excerpt,slug,date,author,featured_article,featured_photo,primary_category,categories",
  },
});

const articles = ref(articlesRequest.value?.data);

onMounted(() => {});
</script>

<template>
  <div class="mx-auto max-w-7xl pt-10">
    <div v-for="article in articles" :key="article.slug">
      <ArticleCard :article="article" />
    </div>
  </div>
</template>
