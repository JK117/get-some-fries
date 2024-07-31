<template>
  <div class="page-content-template">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-content-template {
  min-height: calc(100vh - 2px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 30%;
}
</style>