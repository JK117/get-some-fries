<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const appRouter = useRouter()
const appRoute = useRoute()
const appSideBarCollapsed = ref(false)
const appMenuOptions = ref([
  {name: 'Page 1', route: '/page1', icon: 'menu-outlined'},
  {name: 'Page 2', route: '/page2', icon: 'appstore-outlined'},
])
const appMenuSelectedKeys = ref([''])
const jump = (path) => {
  appRouter.push(path)
}
watch(
  () => appRoute.fullPath,
  val => {
    appMenuSelectedKeys.value = [String(val)]
  }
)
</script>

<template>
  <a-layout-sider collapsible v-model:collapsed="appSideBarCollapsed">
    <div class="app-logo"></div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="appMenuSelectedKeys">
      <a-menu-item
        v-for="option in appMenuOptions"
        :key="option.route"
        @click="jump(option.route)"
      >
        <component :is="option.icon" />
        <span>{{ option.name }}</span>
      </a-menu-item>
    </a-menu>
    <a-flex
      v-if="!appSideBarCollapsed" 
      vertical 
      justify="center" 
      align="center" 
      style="position:absolute;bottom: 60px;width: 100%;" 
    >
      <AppSideBarFooter />
    </a-flex>
  </a-layout-sider>
</template>

<style scoped>
.app-logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
/* app-menu-item style overrided  */
</style>