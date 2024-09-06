<script setup>
import { unref, computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue';
const { page } = useData()
const { Layout } = DefaultTheme
const isHome = computed(() => unref(page)?.filePath === 'index.md')
</script>
<template>
  <Layout>
  <template #doc-after>
  <Comment v-if="!isHome" :key="page.filePath"></Comment>
  </template>
  </Layout>
</template>
