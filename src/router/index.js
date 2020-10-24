import Vue from "vue"
import VueRouter from "vue-router";
import mainPage from "../views/main/main.vue"
import aboutus from "../views/aboutus/aboutus.vue"
import product from "../views/assay/product.vue"
import research from "../views/research/research.vue"
import hezuo from "../views/partner/hezuo.vue"
// import gsjj from "../views/aboutus/gsjj.vue"
// import news from "../views/aboutus/news.vue"
// import contact from "../views/aboutus/contact.vue"
// import p1 from "../views/assay/p1.vue"
// import p2 from "../views/assay/p2.vue"

// import anli from "../views/research/anli.vue"
// import chengguo from "../views/research/chengguo.vue"
// import team from "../views/research/team.vue"

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
        // {
        //     name: "",
        //     path: "/about/news",
        //     component: news
        // },
        // {
        //     name: "",
        //     path: "/about/contact",
        //     component: contact
        // },
        {
            name: "product",
            path: "/product",
            component: product
        },
        // {
        //     name: "",
        //     path: "/product/p2",
        //     component: p2
        // },
        {
            name: "research",
            path: "/research",
            component: research
        },
        // {
        //     name: "",
        //     path: "/research/chengguo",
        //     component: chengguo
        // },
        // {
        //     name: "",
        //     path: "/research/team",
        //     component: team
        // },
        {
            name: "hezuo",
            path: "/hezuo",
            component: hezuo
        }
    ]
})
export default routers;