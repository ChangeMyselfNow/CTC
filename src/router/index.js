import Vue from "vue"
import VueRouter from "vue-router";
import main from "../views/main/main.vue"
import gsjj from "../views/aboutus/gsjj.vue"
import news from "../views/aboutus/news.vue"
import contact from "../views/aboutus/contact.vue"
import p1 from "../views/assay/p1.vue"
import p2 from "../views/assay/p2.vue"
import hezuo from "../views/partner/hezuo.vue"
import anli from "../views/research/anli.vue"
import chengguo from "../views/research/chengguo.vue"
import team from "../views/research/team.vue"
Vue.use(VueRouter)

const routers = new VueRouter({
    mode: 'history',
    routes: [{
            name: "",
            path: "/about/gsjj",
            component: gsjj
        },
        {
            name: "",
            path: "/about/news",
            component: news
        },
        {
            name: "",
            path: "/about/contact",
            component: contact
        },
        {
            name: "",
            path: "/product/p1",
            component: p1
        },
        {
            name: "",
            path: "/product/p2",
            component: p2
        },
        {
            name: "",
            path: "/research/anli",
            component: anli
        },
        {
            name: "",
            path: "/research/chengguo",
            component: chengguo
        },
        {
            name: "",
            path: "/research/team",
            component: team
        },
        {
            name: "",
            path: "/hezuo",
            component: hezuo
        }
    ]
})
export default routers;