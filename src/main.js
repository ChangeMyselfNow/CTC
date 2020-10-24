import Vue from 'vue'
import App from './App.vue'
import "@/scss/base.scss";
import router from '@/router'
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2, { Navigation, Pagination, Autoplay } from "swiper"
Swiper2.use([Navigation, Pagination, Autoplay])
Vue.use(VueAwesomeSwiper)
Vue.use(Element)
import store from './store/store'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // console.log(to)
    if(to.name){
        if(to.query && to.query.showIndex){
            store.commit('changeActiveIndex', store.state.activeObj[to.name] + '-' + to.query.showIndex)
        }else {
            store.commit('changeActiveIndex', store.state.activeObj[to.name])
        }
    }
    next()
})

new Vue({
    render: h => h(App),
    store,
    router: router
}).$mount('#app')