<script setup lang="ts">
import axios from 'axios'
type catObj = {
    id: string,
    url: string,
    width: number,
    height: number,
    breeds: [],
}
const catObjList = ref<catObj[] | null>(null)
// const imageUrlList = ref([
//     'https://s2.loli.net/2023/03/13/JBZmOSLPXUaqyRM.jpg',
//     'https://s2.loli.net/2023/03/13/1pKXkr4lJAj2qyu.jpg',
//     'https://s2.loli.net/2023/03/13/YhdZK2tuwrVGO4b.jpg',
// ])
onMounted(
    async() => {
        await axios.get("https://api.thecatapi.com/v1/images/search", {
            params: {
                limit: 10,
                api_key: 'live_bkOUNeyFzM6Az7spMEAAAKsaOgun2VXtukEiIiWfbGzJnnCSVi1oz4d81FbC8jtc'
            }
        }).then(res => {
            console.log('Cat API Fetched')
            catObjList.value = res.data
        }).catch(err => {
            console.log(err)
        }).finally()
    }
)
</script>


<template>
    <MainContentBox>
        <a-row>
            <a-col
                :xs="24"
                :sm="12"
                :md="8"
                :lg="6"
                v-for="(cat, i) in catObjList"
                :key="i"
            >
                <FlowCard
                    :imgUrl="cat.url"
                ></FlowCard>
            </a-col>
        </a-row>
    </MainContentBox>
</template>


<style scoped lang="scss"></style>
