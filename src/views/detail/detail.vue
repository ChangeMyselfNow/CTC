<template>
	<div class="container">
		<div class="content_left">
			<div class="image_content">
				<img :src="navList.logo" />
			</div>
			<div class="list_content">
				<ul class="content_ul">
					<li v-for="(item, index) in navList.options" :key="index" :class="showIndex == (index + 1) ? 'active' : ''" @click="$router.push(item.path)">
						{{item.label}}
					</li>
				</ul>
			</div>
		</div>
		<div class="news-content-box">
			<div class="contentTop">
				<p class="contentTitle">
					{{ detail.title }}
				</p>
			</div>
			<div class="contentTexts" v-html="detail.content"></div>
		</div>
	</div>
</template>
<script>
import { getNews } from '@/api/api'
export default {
	name: '',
	data() {
		return {
      detail: {},
      navList: {},
      showIndex: '1',
			fromNavObj: [
        {
					logo: require('@/assets/image/left_top.jpg'),
					options: [
						{
							label: '公司简介',
              activeIndex: '2-1',
              path: '/aboutus?showIndex=1'
						},
						{
							label: '新闻动态',
							activeIndex: '2-2',
              path: '/aboutus?showIndex=2'
						},
						{
							label: '联系我们',
							activeIndex: '2-3',
              path: '/aboutus?showIndex=3'
						},
					],
        },
        {
					logo: require('@/assets/image/products.jpg'),
					options: [
						{
							label: '无创产前DNA',
							activeIndex: '3-1',
              path: '/product?showIndex=1'
						},
						{
							label: 'CTC检查',
							activeIndex: '3-2',
              path: '/product?showIndex=2'
						},
					],
        },
        {
					logo: require('@/assets/image/research.jpg'),
					options: [
						{
							label: '技术团队',
							activeIndex: '4-1',
              path: '/research?showIndex=1'
						},
						{
							label: '成果与专利',
							activeIndex: '4-2',
              path: '/research?showIndex=2'
						},
						{
							label: '案例分享',
							activeIndex: '4-3',
              path: '/research?showIndex=3'
						},
					],
				},
      ]
		}
	},
	created() {
		if (this.$route.query && this.$route.query.id) {
			let id = this.$route.query.id
			this.getNewDetail(id)
		}
		if (this.$route.query && this.$route.query.fm) {
      let from = this.$route.query.fm;
      let fromArr = from.split('-');
      this.navList = this.fromNavObj[fromArr[0] - 2];
      this.showIndex = fromArr[1]
			this.$store.commit('changeActiveIndex', from)
			
		}
	},
	methods: {
		getNewDetail(id) {
			let params = {
				_id: id,
			}
			getNews(params).then((res) => {
				console.log(res)
				if (res.code == 200) {
					this.detail = res.data[0]
				}
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
	overflow: hidden;
	.content_left {
		float: left;
		width: 300px;
		.image_content {
			img {
				width: 300px;
			}
		}
		.list_content {
			.content_ul {
				li {
					line-height: 60px;
					font-size: 16px;
					padding-top: 15px;
					padding-bottom: 15px;
					text-align: center;
					border-bottom: 1px solid #e5e5e5;
					cursor: pointer;
					&:hover {
						background-color: rgba($color: #1e90ff, $alpha: 0.05);
						border-right: 1px solid #1e90ff;
						color: #1e90ff;
					}
					&.active {
						background-color: rgba($color: #1e90ff, $alpha: 0.05);
						border-right: 1px solid #1e90ff;
						color: #1e90ff;
					}
				}
			}
		}
	}
	.news-content-box {
		margin-left: 330px;
		.contentTop {
			text-align: center;
			.contentTitle {
				font-weight: bold;
				font-size: 26px;
				color: cornflowerblue;
				margin-bottom: 30px;
			}
		}
		.contentTexts {
			font-size: 12px;
			width: 95%;
			margin: 0 auto;
			line-height: 28px;
			text-indent: 24px;
			/deep/p {
				width: 100%;
				img {
					width: 50%;
					margin: 20px 0 20px 25%;
				}
			}
		}
	}
}
</style>
