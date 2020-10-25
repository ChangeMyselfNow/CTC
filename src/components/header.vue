<template>
	<div class="header">
		<div class="header_top">
			<div class="left-content">
				<div id="logo">
					<img
						:src="require('@assets/logo/logo.png')"
						alt="CTC检查是什么检查-CTC检查费用是多少-CTC检查机构-CTC检查多少钱一次"
					/>
				</div>
			</div>
			<div class="right-content">
				<div id="search"></div>
				<div class="nav-content">
					<el-menu
						:default-active="$store.state.activeIndex"
						class="el-menu-demo"
						mode="horizontal"
						@select="handleSelect"
						text-color="black"
						active-text-color="#1989FA"
					>
						<el-menu-item index="1" @click="$router.push('/')">网站首页</el-menu-item>

						<el-submenu index="2">
							<template slot="title">关于我们</template>
							<el-menu-item
								index="2-1"
								@click="$router.push({ path: '/aboutus', query: { showIndex: 1 } })"
								>公司简介</el-menu-item
							>
							<el-menu-item
								index="2-2"
								@click="$router.push({ path: '/aboutus', query: { showIndex: 2 } })"
								>新闻动态</el-menu-item
							>
							<el-menu-item
								index="2-3"
								@click="$router.push({ path: '/aboutus', query: { showIndex: 3 } })"
								>联系我们</el-menu-item
							>
						</el-submenu>

						<el-submenu index="3">
							<template slot="title">化验项目</template>
							<el-menu-item
								index="3-1"
								@click="$router.push({ path: '/product', query: { showIndex: 1 } })"
								>无创产前DNA</el-menu-item
							>
							<el-menu-item
								index="3-2"
								@click="$router.push({ path: '/product', query: { showIndex: 2 } })"
								>CTC检查</el-menu-item
							>
						</el-submenu>

						<el-submenu index="4">
							<template slot="title">科研中心</template>
							<el-menu-item
								index="4-1"
								@click="$router.push({ path: '/research', query: { showIndex: 1 } })"
								>技术团队</el-menu-item
							>
							<el-menu-item
								index="4-2"
								@click="$router.push({ path: '/research', query: { showIndex: 2 } })"
								>成果与专利</el-menu-item
							>
							<el-menu-item
								index="4-3"
								@click="$router.push({ path: '/research', query: { showIndex: 3 } })"
								>案例分享</el-menu-item
							>
						</el-submenu>

						<el-menu-item index="5" @click="$router.push('/hezuo')">医疗合作</el-menu-item>
					</el-menu>
				</div>
			</div>
		</div>
		<el-carousel indicator-position="none" height="550px">
			<el-carousel-item v-for="item in imagesList" :key="item.id">
				<img :src="item.idView" class="imageBox" />
			</el-carousel-item>
		</el-carousel>
		<!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img style="width:100%;height:350px;" src="@/assets/image/1-1FRG35Q20-L.jpg">
      </swiper-slide>
      <swiper-slide>
        <img style="width:100%;height:350px;" src="@/assets/image/287667465S30-L.jpg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev" @click="next"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next" @click="prev"></div>
    </swiper> -->
	</div>
</template>
<script>
export default {
	name: '',
	data() {
		return {
			activeIndex: '1',
			imagesList: [
				{ id: 0, idView: require('@/assets/image/1-1FRG35Q20-L.jpg') },
				{ id: 1, idView: require('@/assets/image/287667465S30-L.jpg') },
				{ id: 2, idView: require('@/assets/image/1-1FRG35Q20-L.jpg') },
				{ id: 3, idView: require('@/assets/image/287667465S30-L.jpg') },
			],
		}
	},
	created() {
		// console.log(this.$store.state.activeIndex)
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper
		},
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath)
		},
		prev() {
			this.swiper.slidePrev()
		},
		next() {
			this.swiper.slideNext()
		},
	},
	mounted() {},
}
</script>
<style lang="scss" scoped>
.header_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	width: 100%;
	height: 150px;
	.el-menu--horizontal {
		border: none;
	}
}
.imageBox {
	width: 100%;
	height: 100%;
}
</style>
