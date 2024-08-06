<script setup>
import { ref } from 'vue'
const siteFilingNum = ref('沪ICP备2021009688号-2')
const siteFilingLink = ref('https://beian.miit.gov.cn/')
</script>

<template>
  <a-button 
    :href="siteFilingLink" 
    target="_blank" 
    type="link" 
    size="small"
  >
    {{ siteFilingNum }}
  </a-button>
</template>
