<template>
	<div class="container">
		<div class="image_content">
			<img style="width: 100%" src="@/assets/image/201737144423974.jpg" />
		</div>
		<div class="about_content">
			<h1>关于我们</h1>
			<h4>ABOUT</h4>
			<p>
				CTC检查化验所成立于2009年，总部在深圳，联合国内多家医院和医学化验所，遍布北京、上海、广州、深圳、天津、成都、杭州、苏州、重庆、武汉、南京、大连、沈阳、长沙、郑州、西安、青岛、无锡、济南、宁波、佛山、哈尔滨、东莞、福州、长春、石家庄、合肥、昆明、南昌、贵阳、呼和浩特、乌鲁木齐，为客户提供精准的CTC检测服务。
			</p>
		</div>
		<div class="product_content">
			<div class="contentTitle">
				<h1>热门产品</h1>
				<h4>HOT&nbsp;&nbsp;PRODUCT</h4>
			</div>
			<div class="proList">
				<ul>
					<li v-for="(item, index) in productList" :key="index" @click="todetail(item._id)">
						<img :src="item.coverUrl" class="proImage" />
						<h3>{{ item.title }}</h3>
					</li>
				</ul>
			</div>
			<div class="proBtu">
				<button @click="$router.push('/product')">查看更多</button>
			</div>
		</div>

		<div class="news">
			<div class="newTitle">
				<h1>新闻动态</h1>
				<h4>NEWS&nbsp;&nbsp;INFORMATION</h4>
			</div>
			<div class="newsContent">
				<ul>
					<li v-for="(item, index) in newsAll" :key="index" @click="toNewdetail(item._id)">
						<div class="ctcNew">
							<div class="newImage">
								<img :src="item.coverUrl" />
							</div>
							<div class="newText">
								<div class="title">{{ item.title }}</div>
								<div class="contents">{{ item.remark }}</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="newButton">
				<button @click="$router.push('/aboutus?showIndex=2')">查看更多</button>
			</div>
		</div>
		<div class="research_content">
			<div class="contentTitle">
				<h1>成果与专利</h1>
				<h4>RESULTS&nbsp;&nbsp;AND&nbsp;&nbsp;PATENTS</h4>
			</div>
			<div class="contentImage">
				<div class="detailImage" v-for="(item, index) in researchImage" :key="index">
					<img :src="item.image" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getNews } from '@/api/api'
export default {
	name: '',
	data() {
		return {
			productList: [],
			newsAll: [],
			researchImage: [
				{
					image: require('@/assets/image/1-1FR21G010S5.png'),
				},
				{
					image: require('@/assets/image/1-1FR21G010S5.png'),
				},
				{
					image: require('@/assets/image/1-1FR21G010S5.png'),
				},
				{
					image: require('@/assets/image/1-1FR21G010S5.png'),
				},
			],
		}
	},
	created() {
		this.getNewsList()
	},
	methods: {
		todetail(id) {
      this.$router.push({path: "/detail", query: {id, fm: '3-1'}})
		},
		toNewdetail(id) {
			this.$router.push({path: "/detail", query: {id, fm: '2-2'}})
		},
		getNewsList() {
			getNews({ type: 'pro' }).then((res) => {
				console.log(res)
				if (res.code == 200) {
					this.productList = res.data.slice(0, 3)
				}
			})
			getNews({ type: 'us_news' }).then((res) => {
				console.log(res)
				if (res.code == 200) {
					this.newsAll = res.data.slice(0, 4)
				}
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.container {
	.image_content {
		width: 100%;
	}
	.about_content {
		width: 80%;
    margin: 0 auto;
		border-bottom: 1px solid #ececec;
		padding: 30px 60px;
		h1 {
			color: #0068b7;
			font-style: normal;
		}
		h4 {
			color: #999999;
			padding-top: 2px;
		}
		p {
			margin-top: 15px;
			line-height: 35px;
			text-indent: 21pt;
			letter-spacing: 1px;
		}
	}
	.product_content {
		padding: 10px 20px 30px 40px;
		width: 80%;
		margin: 0 auto;
		margin-top: 40px;
		.proList {
			margin-bottom: 30px;
			ul {
				width: 100%;
				margin-top: 30px;
				li {
					width: 30%;
					margin-right: 5%;
					float: left;
					text-align: center;
					border-radius: 3px;
					padding: 3px 3px 3px 3px;
					margin-bottom: 25px;
					cursor: pointer;
					&:last-child {
						margin-right: 0;
					}
					&:hover {
						background-color: cornflowerblue;
						h3 {
							color: #fff;
						}
					}
					img {
						width: 100%;
						height: 240px;
						border: 1px solid #ececec;
					}
					h3 {
						color: #333333;
						padding: 10px;
						font-weight: normal;
						width: 100%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.proBtu {
			text-align: center;
      margin-top: 20px;
			button {
				color: white;
				background-color: cornflowerblue;
				font-size: 18px;
				padding: 15px 45px;
				border-radius: 6px;
				cursor: pointer;
			}
		}
	}
	.news {
		width: 100%;
    margin: 0 auto;
		padding: 30px 0;
		background: url(../../assets/image/webnews.jpg);
		background-size: cover;
		.newTitle {
			text-align: center;
			h1 {
				color: white;
			}
			h4 {
				color: white;
			}
		}
		.newsContent {
			margin-top: 30px;
			ul {
				width: 80%;
        margin: 0 auto;
				overflow: hidden;
				li {
					width: 48%;
					margin-right: 4%;
          height: 130px;
					float: left;
					cursor: pointer;
					margin-bottom: 25px;
					&:nth-child(2n) {
						margin-right: 0;
					}
					.ctcNew {
						width: 100%;
						.newImage {
							float: left;
							width: 30%;
							img {
								width: 100%;
                height: 130px;
							}
						}
						.newText {
							padding: 10px;
							margin-left: 32%;
							text-overflow: clip;
							.title {
								border-bottom: 1px solid #ececec;
								padding-bottom: 8px;
								font-size: 18px;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
							.contents {
								font-size: 12px;
								color: #dbdbdb;
								line-height: 24px;
								margin-top: 5px;
								display: -webkit-box;
								overflow: hidden;
								white-space: normal;
								text-overflow: ellipsis;
								word-wrap: break-word;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							}
						}
					}
				}
			}
		}
		.newButton {
			text-align: center;
      margin-top: 20px;
			button {
				color: cornflowerblue;
				background-color: white;
				font-size: 18px;
				padding: 15px 45px;
				border-radius: 6px;
				cursor: pointer;
			}
		}
	}
	.research_content {
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 40px;
		.detailImage {
			float: left;
			width: 22%;
			padding: 2% 0;
			margin-left: 4%;
			margin-top: 20px;
			// cursor: pointer;
			&:first-child {
				margin-left: 0;
			}
			img {
				width: 100%;
			}
		}
	}
	.contentTitle {
		text-align: center;
		h1 {
			color: #0068b7;
		}
		h4 {
			color: #999999;
		}
	}
}
</style>
