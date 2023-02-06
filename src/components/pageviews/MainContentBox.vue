<script setup lang="ts">
</script>


<template>
    <div class="main-inner-box">
        <slot></slot>
    </div>
</template>


<style scoped>
.main-inner-box {
    display: flex;
    min-height: calc(100% - 1px);
}
</style>
