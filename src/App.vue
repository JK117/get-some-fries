<script setup lang="ts">
</script>

<template>
    <a-layout class="app-layout">
        <Sidebar></Sidebar>

        <a-layout>
            <a-layout-content style="margin: 0 16px">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<style scoped lang="scss">
.app-layout {
    height: 100vh;
}
</style>
