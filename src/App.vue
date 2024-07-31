<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorldLogos from './components/HelloWorldLogos.vue'
</script>

<template>
  <!-- <HelloWorldLogos /> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <a-layout class="app-layout">
    <AppSideBar />
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.app-layout {
  height: 100vh;
}
</style>
