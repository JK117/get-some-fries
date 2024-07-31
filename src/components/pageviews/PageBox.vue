<script setup></script>

<template>
  <div class="page-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-box {
  min-height: calc(100vh - 1px);
  padding: 0 3vw;
}
</style>