<script setup lang="ts">
const appRouter = useRouter()
const appRoute = useRoute()
const siderCollapsed = ref(false)
const siderMenuOptions = ref([
    {name: 'Flex Menus', route: '/menu', icon: 'menu-outlined'},
    {name: 'Cards Flow', route: '/flow', icon: 'appstore-outlined'},
])
const siderMenuSelectedKeys = ref([''])
const jump = (path: string) => {
  appRouter.push(path)
}
watch(
  () => appRoute.fullPath,
  val => {
    siderMenuSelectedKeys.value = [String(val)]
  }
)
</script>


<template>
    <a-layout-sider collapsible v-model:collapsed="siderCollapsed">
        <div class="app-logo"></div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="siderMenuSelectedKeys">
            <a-menu-item
                v-for="option in siderMenuOptions"
                :key="option.route"
                @click="jump(option.route)"
            >
                <component :is="option.icon" />
                <span>{{ option.name }}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>


<style scoped lang="scss">
.app-logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
