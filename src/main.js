import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n/index.js'
import { createRouter, createWebHistory } from 'vue-router'


import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Services from "@/pages/Services.vue"
import Why from "@/pages/Why.vue"
import Courses from "@/pages/Courses.vue"
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import NotFount from './components/NotFount.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Services },
    { path: '/why', component: Why },
    { path: '/course', component: Courses },
    { path: '/login', component: Login },
    { path: '/register', component: Register},
    { path: '/:pathMatch(.*)*', component: NotFount}
    
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
