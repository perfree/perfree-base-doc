<script setup>
import { ref,onMounted } from 'vue';
const commentRef = ref(null);
onMounted(() => {
  try {
    if (commentRef.value) {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('repo', 'perfree/perfree-base-doc');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'Comment');
      script.setAttribute('theme', 'preferred-color-scheme');
      commentRef.value.appendChild(script);
    } else {
      console.warn("Comments won't load because the commentRef element is null.");
    }
  } catch (error) {
    console.error('Comments loading failed.', error);
  }
})
</script>
<template>
  <div ref="commentRef" id="comment"></div>
</template>
