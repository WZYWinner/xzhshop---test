<template>
  <div class="top-content">
	  <div class="top-bar">
		  <div class="top-left">
			  <ul>
				 <li v-for="(item,index) in work" :key="index" style="display:inline-block;font-size:15px;padding-left:15px;">
					 <span>{{item.name}}</span>
					 <span v-show="index!=8">|</span>
				 </li>
			  </ul>
		  </div>
		</div>
		<div class="goods-container">
			<div class="top">
			<div class="goods-left">
				<img :src="phoneInfo[jishen].imgShow" alt="">
			</div>
			<div class="goods-right">
				<h3>{{title}}</h3>
				<p style="color:#FF0036">{{advantage}}</p>
				<div class="price_panel">
					<div class="price">价格:</div>
					<div class="price-num">¥ {{(price*num).toFixed(2)}}</div>
				</div>
				<div style="text-decoration:line-through;color: #999;"><div class="goods-font">运费:<span style="color: #280;margin-left:40px">免运费</span></div></div>
				<div class="goods-font">套餐类型<span class="leixing">i3-8145U/8G/256G 傲腾增强型 SSD</span></div>
				<div style="display:flex;margin-top:30px;">
					<div class="goods-font">机身颜色</div>
					<div class="jishen" v-for="(goods,index) in phoneInfo" :key="index" @click="chooseColor(index)" :class="{goodsActive : jishen === index}">
						<img :src="goods.img" alt="">
						{{goods.name}}
					</div>
					</div>
					<div class="number">
						<div class="goods-font">数量</div>
						<div class="nums">
							<button @click="sub" :disabled="num===1">-</button>
						<span style="margin:0 15px;">{{num}}</span>
						<button @click="add">+</button>
						</div>
					</div>
					<button class="pay" @click="pay">立即购买</button>
			</div>
			</div>
			<div class="jiesuan" v-show="isLock">
						<div class="success">
							<div class="tishi">
								<img src="../assets/img/pay_success.png" alt="">
								<span>购买成功</span>
							</div>
						<div class="close" @click="quxiao"><img src="../assets/img/close.png" alt=""></div>
						</div>
					</div>
			<div class="bottom">
				<div class="bottom_left">
					<div class="hot_title">店铺热销</div>
					<div class="shadow">
					<div v-for="(items,index) in hot" :key="index">
						<div class="hot_goods">
						<div class="hot_goods_img"><img :src="items.img" alt=""></div>
					</div>
					<div class="hot_goods_intro">热销{{items.sale}}件<span>￥{{items.price}}</span></div>
					</div>
					</div>
				</div>
				<div class="bottom_right">
					<div class="bottom_right_img" v-for="(items,index) in showImg" :key="index">
						<img :src="items" alt="">
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	name: 'GoodsDetail',
	data () {
		return {
			name: 'Lenovo/联想340C',
			isLock: false,
			jishen: 0,
			title: '【店铺爆款】Lenovo/联想340C 英特尔酷睿i3 傲腾增强型SSD 15.6英寸轻薄本商务笔记本电脑',
			advantage: '英特尔酷睿i3+256G 傲腾增强型SSD+大屏轻薄',
			num: 1,
			active: false,
			price: '3499.00',
			phoneInfo: [
				{name: '', img: require('../assets/img/lenovo340C/1_small.png'), imgShow: require('../assets/img/lenovo340C/1.png'), price: 3499.00}
			],
			showImg: [
				require('../assets/img/lenovo340C/info1.jpg'),
				require('../assets/img/lenovo340C/info2.jpg'),
				require('../assets/img/lenovo340C/info3.jpg'),
				require('../assets/img/lenovo340C/info4.jpg'),
				require('../assets/img/lenovo340C/info5.jpg'),
				require('../assets/img/lenovo340C/info6.jpg'),
				require('../assets/img/lenovo340C/info7.jpg')
			],
			hot: [
          {
            img: require('../assets/img/hot/1.jpg'),
            price: 28.0,
            sale: 165076
          },
          {
            img: require('../assets/img/hot/2.jpg'),
            price: 36.0,
            sale: 135078
          },
          {
            img: require('../assets/img/hot/3.jpg'),
            price: 38.0,
            sale: 105073
          },
          {
            img: require('../assets/img/hot/4.jpg'),
            price: 39.0,
            sale: 95079
          },
          {
            img: require('../assets/img/hot/5.jpg'),
            price: 25.0,
            sale: 5077
          },
          {
            img: require('../assets/img/hot/6.jpg'),
            price: 20.0,
            sale: 3077
          }
        ],
			work: [
				{name: '华为', sourceUrl: 'http://www.mi.com/index.html'},
				{name: 'VIVO', sourceUrl: 'http://www.miui.com/'},
				{name: '小米', sourceUrl: 'http://www.miliao.com/'},
				{name: '三星', sourceUrl: 'http://game.xiaomi.com/'},
				{name: '荣耀', sourceUrl: 'http://www.duokan.com/'},
				{name: '索尼', sourceUrl: 'https://i.mi.com/'},
				{name: '微鲸', sourceUrl: 'http://www.mi.com/c/appdownload/'},
				{name: 'HTC', sourceUrl: 'http://static.mi.com/feedback/'},
				{name: 'Select Region', sourceUrl: 'http://www.mi.com/index.html'}
			],
			timer: '',
			cartStatus: false
		}
	},
  ready () {
  },
	methods: {
		pay: function () {
			this.$router.push({name:'Payment',params: {img:this.phoneInfo[this.jishen].img,name:this.name,price:this.price,num:this.num}})
		},
		quxiao: function () {
			this.isLock = false
		},
		add: function () {
			this.num = ++this.num
		},
		sub: function () {
			this.num = --this.num
		},
		choose: function () {
			this.active = !this.active
		},
		chooseColor: function (index) {
			this.jishen = index
			this.price = this.phoneInfo[index].price.toFixed(2)
			console.log(this.price)
		},
		enter: function () {
			this.cartStatus = true
		},
		leave: function () {
			let self = this
			this.timer = setTimeout(function () {
				self.cartStatus = false
			}, 300
			)
		}
	},
	components: {
	}
}
</script>

<style scoped>
.top-content{
	width: 100%;
	/* height: 40px; */
	background: #f5f5f5;
	color: #ccc;
}
.top-bar{
	width: 1224px;
	height: 40px;
	background: black;
	/* background: red; */
	margin: 0 auto;
	line-height: 40px;
	display: flex;
	justify-content: space-between;
	position: relative;
}
.top-right{
	padding-right: 15px;
	display: flex;
}
.active{
	background: #ccc;
	color: red;
}
.cart{
	/* position: absolute; */
	top:40px;
	right: 0;
	background: red;
	height: 90px;
}
.fadein-transition{
	transition: all 0.5s ease;
	height: 90px;
}
.fadein-enter, .fadein-leave{
	height: 0;
}
.goods-container{
	color: black;
	width: 1226px;
	margin: 20px auto;
	/* border: 1px red solid; */
	height: auto;
	background: #fff;
	
}
.top{
	/* border: #999 1px solid; */
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #e9e9e9;
	height: 580px;;
}
.goods-left{
	width: 440px;
	height: 440px;
	border: 1px solid rgba(0,0,0,.05);
	margin: 20px;
}
.goods-right{
	width: 500px;
	/* border: gray 1px solid; */
	margin-top: 20px;
}
.price_panel{
	display: flex;
	background-color: #e9e9e9;
	align-items: center;
}
.price{
	color: #999;
    font-size: 12px;
    text-align: left;
    float: left;
    width: 69px;
    margin: 0 0 0 8px;
	line-height: 27px;
	padding: 5px;
}
.price-num{
	color: #FF0036;
    font-size: 24px;
    font-weight: bolder;
}
.goods-font{
	color: #999;
    font-size: 12px;
    text-align: left;
    /* width: 50px; */
    margin: 0 10px;
	margin-top: 30px;
}
.leixing{
	margin-left: 20px;
	background-color: #fff;
    white-space: nowrap;
    width: auto!important;
    min-width: 10px;
    padding: 8px;
    text-align: center;
    border: 2px solid #FF0036;
    color: #000;
    text-decoration: none;
	cursor: pointer;
}
.jishen{
	margin-left: 10px;
	background-color: #fff;
    white-space: nowrap;
    min-width: 10px;
    padding: 2px;
    text-align: center;
    border: 1px solid #b8b7bd;
    color: #000;
	width: 80px;
    text-decoration: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
}
.goodsActive{
	border: 2px solid #FF0036;
}
.number{
	margin-top: 5px;
	display: flex;
	align-items: center;
}
.nums{
	margin-left: 34px;
	margin-top: 20px;
}
.pay{
	margin-top: 50px;
	margin-left: 10px;
	padding: 8px;
    overflow: hidden;
    position: relative;
    width: 178px;
    background-color: #ffeded;
    border: 1px solid #FF0036;
    color: #FF0036;
    font-family: 'Microsoft Yahei'
}
.bottom{
	/* border: 1px solid blue; */
	display: flex;
	justify-content:space-between;
	margin-top: 30px;
}
.bottom img{
	width: 800px;
}
.bottom_left{
	width: 200px;
	/* height: 100px; */
	/* border: #999 solid 1px; */
	/* box-shadow: 0px 0px 5px #999; */
}
.bottom_right{
	width: 930px;
	/* border: #FF0036 solid 1px;
	height: 100px; */
}
.hot_title{
	width: 100%;
    height: 38px;
    font-size: 16px;
    line-height: 38px;
    color: #fff;
    background-color: #E4393C;
    -webkit-box-shadow: 0px 0px 5px #E4393C;
    box-shadow: 0px 0px 5px #E4393C;
    text-align: center;
}
.hot_goods{
	margin-top: 15px;
	display: flex;
	justify-content: center;
}
.hot_goods_img{
	width: 80%;
}
.hot_goods_img img{
	width: 100%;
}
.hot_goods_intro{
	display: flex;
	justify-content: center;
	font-size: 13px;
    color: #999;
}
.hot_goods_intro span{
	margin-left: 20px;
	    color: #E4393C;
    font-weight: bolder;
}
.shadow{
	box-shadow: 0px 0px 5px #999;
}
.bottom_right_img{
	width: 100%;
}
.bottom_right_img img{
	width: 100%;
	height: 100%;
}
.jiesuan{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.1);
	position: fixed;
	top: 0;
	left: 0;
}
.success{
	position: absolute;
	top: 45%;
	left: 45%;
	width: 250px;
	height: 120px;
	background: whitesmoke;
	z-index: 99;
	box-shadow: 0px 0px 5px #999;
}
.tishi{
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #3FA817;
}
.tishi span{
	margin-left: 20px;
	font-size: 20px;
}
.close{
	position: absolute;
	right: 3px;
	top: 3px;
}
.close img{
	width: 15px;
	height: 15px;
	cursor: pointer;
}
</style>
