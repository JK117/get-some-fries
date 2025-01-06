<script setup>
import { ref } from 'vue'
const siteFilingNum = ref('沪ICP备2021009688号-2')
const siteFilingLink = ref('https://beian.miit.gov.cn/')
</script>

<template>
    <a-flex
      vertical 
      justify="flex-end" 
      align="center" 
      style="width: 100%;height: 100%;"
    >
      <a-button 
        :href="siteFilingLink" 
        target="_blank" 
        type="link" 
        size="small" 
        style="max-width: 100%;"
      >
        <div style="overflow: hidden;text-overflow: ellipsis;">
          <span>
            {{ siteFilingNum }}
          </span>
        </div>
      </a-button>
    </a-flex>
</template>
