import Vue from "vue"
import VueRouter from "vue-router";
import mainPage from "../views/main/main.vue"
import aboutus from "../views/aboutus/aboutus.vue"
import product from "../views/assay/product.vue"
import research from "../views/research/research.vue"
import hezuo from "../views/partner/hezuo.vue"
import detail from "../views/detail/detail.vue"

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routers = new VueRouter({
    mode: 'history',
    routes: [{
            name: "home",
            path: "/",
            component: mainPage
        },
        {
            name: "aboutus",
            path: "/aboutus",
            component: aboutus
        },
        {
            name: "product",
            path: "/product",
            component: product
        },
        {
            name: "research",
            path: "/research",
            component: research
        },
        {
            name: "detail",
            path: "/detail",
            component: detail
        },
        {
            name: "hezuo",
            path: "/hezuo",
            component: hezuo
        }
    ]
})
export default routers;