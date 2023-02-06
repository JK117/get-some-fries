import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as Icons from "@ant-design/icons-vue";

router.beforeEach((to, from) => {
    console.log("--- Router update ---")
    console.log("Router: from ", from)
    console.log("Router: to ", to)
})

const app = createApp(App)
app.use(router)
app.mount('#app')

const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}
