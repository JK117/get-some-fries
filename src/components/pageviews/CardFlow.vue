<script setup lang="ts">
const imageUrlList = ref([
    'https://s2.loli.net/2023/03/13/JBZmOSLPXUaqyRM.jpg',
    'https://s2.loli.net/2023/03/13/1pKXkr4lJAj2qyu.jpg',
    'https://s2.loli.net/2023/03/13/YhdZK2tuwrVGO4b.jpg',
])
</script>


<template>
    <MainContentBox>
        <a-row>
            <a-col
                :xs="24"
                :sm="12"
                :md="8"
                :lg="6"
                v-for="(url, i) in imageUrlList"
                :key="i"
            >
                <FlowCard
                    :img-url="url"
                ></FlowCard>
            </a-col>
        </a-row>
    </MainContentBox>
</template>


<style scoped lang="scss"></style>
