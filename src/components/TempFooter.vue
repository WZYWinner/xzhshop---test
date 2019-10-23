<template>
	<footer class="footer-wrap">
		<div class="footer">
			<div class="footer-service">
				<ul class="service clearfix">
					<li class="service-item">
							<span class="icon"><i class="fa fa-gavel"></i></span>
							1小时快修服务
					</li>
					<li class="service-item">
							<span class="icon"><i class="fa fa-history"></i></span>
							7天无条件退货
					</li>
					<li class="service-item">
							<span class="icon"><i class="fa fa-history"></i></span>
							15天免费换货
					</li>
					<li class="service-item">
							<span class="icon"><i class="fa fa-gift"></i></span>
							满150元包邮
					</li>
					<li class="service-item">
							<span class="icon"><i class="fa fa-location-arrow"></i></span>
							520余家售后网点
					</li>
				</ul>
			</div>
			<div class="footer-info">
				<ul class="footer-content clearfix">
					<li class="footer-item">
						<article class="col-links">
							<h3>
								帮助中心
							</h3>
							<p>
								账户管理
							</p>
							<p>
								购物指南

							</p>
							<p>
								订单操作
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								服务支持
							</h3>
							<p>
								售后政策
							</p>
							<p>
								自助服务

							</p>
							<p>
								相关下载
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								关于卡智汇
							</h3>
							<p>
								了解我们
							</p>
							<p>
								加入我们

							</p>
							<p>
								联系我们
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								关注我们
							</h3>
							<p>
							官方微信
							</p>
						</article>
					</li>
					<li class="footer-last-item">
						<div class="col-content">
							<h3 class="phone-number">400032688</h3>
							<p class="phone-desc">
								周一至周日 9:00-18:00<br/>（仅收市话费）
							</p>
							<a href="//www.mi.com/service/contact" target="_blank">
								<span class="server-btn">
									<i></i>
									12小时在线客服
								</span>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="site-info">
				<div class="footer-explan clearfix">
					<img class="logo-img" src="../assets/img/kzh_logo.png" alt="" />
					<div class="explan-content">
						<!-- <ul class="links clearfix">
							<li class="link-item"><a href="//www.mi.com/index.html">小米商城</a></li>
							<li class="link-item"><a href="http://www.miui.com/" target="_blank">MIUI</a></li>
							<li class="link-item"><a href="http://www.miliao.com/" target="_blank">米聊</a></li>
							<li class="link-item"><a href="http://www.duokan.com/" target="_blank">多看书城</a></li>
							<li class="link-item"><a href="http://www.miwifi.com/" target="_blank">小米路由器</a></li>
							<li class="link-item"><a href="http://call.mi.com/" target="_blank">视频电话</a></li>
							<li class="link-item"><a href="http://blog.xiaomi.com/" target="_blank">小米后院</a></li>
							<li class="link-item"><a href="http://xiaomi.tmall.com/" target="_blank">小米天猫店</a></li>
							<li class="link-item"><a href="http://shop115048570.taobao.com" target="_blank">小米淘宝直营店</a></li>
							<li class="link-item"><a href="http://union.mi.com/" target="_blank">小米网盟</a></li>
							<li class="link-item"><a href="javascript:void(0)">问题反馈</a></li>
							<li class="link-item"><a href="javascript:void(0)">Select Region</a></li>
						</ul> -->
						<p class="explan-txt">
							 地址：福州市台江区鳌峰街道光明南路1号 升龙汇金20楼<br>
							 招商电话：400032688 <br>
							 邮箱：fjkzhgj@fjkzh.cn
						</p>
					</div>
					<img class="logo-explan logo-explan-first" src="http://privacy-policy.truste.com/privacy-seal/seal?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8" alt="" />
					<img class="logo-explan" src="http://s01.mifile.cn/i/v-logo-2.png" alt="" />
					<img class="logo-explan" src="http://s01.mifile.cn/i/v-logo-1.png" alt="" />
					<img class="logo-explan" src="http://s01.mifile.cn/i/v-logo-3.png" alt="" />
				</div>
				<!-- <p class="footer-desc">
					探索黑科技，小米为发烧而生
				</p> -->
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style>
.footer {
	width: 1226px;
	height: auto;
	margin: 0 auto;
	padding-bottom: 20px;
}

.footer-service {
	padding: 27px 0;
	border-bottom: 1px solid #e0e0e0;
}
.service {
	
}
.service-item {
		float: left;
		width: 245px;
		height: 27px;
		line-height: 27px;
		font-size: 16px;
		color: #616161;
		padding: 0 40px;
		box-sizing: border-box;
		border-right: 1px solid #e0e0e0;
		&:nth-last-child(1) {
			border-right: 0;
		}
		.icon {
			display: inline-block;
			height: 27px;
			line-height: 27px;
			font-size: 24px;
			margin-right: 10px;
		}
	}
.footer-info {
	padding: 40px 0;
}

.footer-content {
	.footer-item {
		float: left;
		width: 240px;
		height: 120px;
		a {
			text-decoration: none;
			color: #333;
		}
		&:nth-last-child(2) {
			padding-right: 20px;
			border-right: 1px solid #e0e0e0;
		}
		h3 {
			font-size: 14px;
			font-weight: normal;
			margin-bottom: 26px;
		}
		p {
			font-size: 12px;
			margin-top: 10px;
		}
	}
	.footer-last-item {
		float: left;
		.col-content {
			margin-left: 40px;
			.phone-number {
				margin: 0 0 5px;
				font-size: 22px;
				text-align: center;
				margin-bottom: 5px;
				color: #ff6700;
			}
			.phone-desc {
				font-size: 12px;
				line-height: 1.5;
				text-align: center;
    		color: #616161;
			}
			.server-btn {
				display: block;
				width: 120px;
				height: 30px;
				line-height: 30px;
				font-size: 12px;
				text-align: center;
				margin: 0 auto;
				border: 1px solid #ff6700;
				color: #ff6700;
				cursor: pointer;
				&:hover {
					background: #ff6700;
					color: #fff;
				}
			}
		}
	}
}

.footer-explan {
	.logo-img {
		float: left;
		width: 78px;
		height: 70px;
	}
	.explan-content {
		float: left;
		padding-left: 10px;
		.links {
			.link-item {
				float: left;
				padding: 0 5px;
				font-size: 12px;
				color: #757575;
				border-right: 1px solid #757575;
				&:nth-last-child(1) {
					border-right: 0;
				}
			}
		}
	}
	.explan-txt {
		margin: 10px 0 0 5px;
		line-height: 18px;
		font-size: 12px;
		color: #b0b0b0;
		a {
			text-decoration: none;
			color: #b0b0b0;
			&:hover {
				color: #ff6700;
			}
		}
	}
	.logo-explan {
		width: 85px;
		height: 28px;
		&.logo-explan-first {
			margin-left: 50px;
		}
	}
}

.site-info {
	padding: 30px 0;
	.footer-desc {
		text-align: left;
		text-indent: -9999em;
		overflow: hidden;
		width: 267px;
		height: 19px;
		margin: 30px auto 0;
		background: url('http://s01.mifile.cn/i/slogan2016.png') center center no-repeat;
	}
}
</style>
