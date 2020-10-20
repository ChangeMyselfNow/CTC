import Vue from 'vue'
import App from './App.vue'
import "@/scss/base.scss";
import router from '@/router'
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')