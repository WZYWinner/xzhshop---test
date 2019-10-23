<template>
  <div class="boxs-container">
    <div class="boxs">
      <div class="boxs-top clearfix">
        <h3 class="top-title">智能硬件</h3>
        <!-- <a href="//www.mi.com/smart/" target="_blank">
          <span class="top-sub">
            查看全部
            <i class="sub-icon fa fa-fw fa-chevron-circle-right"></i>
          </span>
        </a>-->
      </div>
      <div class="boxs-content clearfix">
        <div class="box-left">
          <a href="http://www.mi.com/scooter/" target="_blank">
            <img src="http://i3.mifile.cn/a4/124d82cc-cfce-44ab-b711-28b21be81683" alt />
          </a>
        </div>
        <div class="box-right">
          <ul class="box-list">
            <li class="box-item" v-for="good in goods" @click="goto">
              <span class="discount-label" :class="good.discountType">{{good.discount}}</span>
              <!-- <a :href="good.sourceUrl" target="_blank"> -->
                <img :src="good.imgUrl" alt />
                <h3 class="box-title">{{good.title}}</h3>
              <!-- </a> -->
              <p class="box-desc">{{good.desc}}</p>
              <p class="box-price">
                {{good.price}}元
                <template v-if="good.discountType === 'discount'">
                  <span class="old-price">{{good.oldPrice}}元</span>
                </template>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          sourceUrl: "//item.mi.com/1161200059.html",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg",
          title: "小米9 Plus",
          desc: "Xiaomi小米9手机Plus九9pro官方旗舰店cc9免息9se透明8尊享版mix4",
          price: "2599",
          discountType: "free",
          discount: "免邮费"
        },
        {
          sourceUrl: "//www.mi.com/mibicycle/",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg",
          title: "华为nova 5 PRO",
          desc:
            "Huawei/华为nova 5 Pro超级夜景4800万AI四摄超级快充超广角智能手机nova5pro",
          price: "2699",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/mitu/",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg",
          title: "三星Galaxy Note10",
          desc:
            "Samsung/三星Galaxy Note10+ SM-N9760 5G 骁龙855 IP68防水 全网通5G智能手机 plus",
          price: "7999",
          discountType: "new",
          discount: "新品"
        },
        {
          sourceUrl: "//www.mi.com/water2/",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg",
          title: "小米平板4 Plus",
          desc:
            "小米平板4Plus 平板电脑 10.1英寸大屏 安卓智能 AI人脸识别全高清超薄",
          price: "1849"
        },
        {
          sourceUrl: "//www.mi.com/ihealth/ ",
          imgUrl: "http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg",
          title: "三星平板 SM-T510",
          desc:
            "三星Galaxy Tab A 2019平板电脑SM-T510 10.1英寸超薄安卓智能平板学习游戏影音",
          price: "1399"
        },
        {
          sourceUrl: "//www.mi.com/dianfanbao/",
          imgUrl:
            "http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg",
          title: "Lenovo/联想340C",
          desc:
            "Lenovo/联想340C 英特尔酷睿i3 15.6英寸轻薄本商务笔记本电脑 傲腾增强型SSD",
          price: "3499"
        },
        {
          sourceUrl: "//item.mi.com/1163200015.html",
          imgUrl: "http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg",
          title: "HTC电视3S 43英寸",
          desc: "开启你的智能生活",
          price: "1499",
          oldPrice: "1825",
          discountType: "discount",
          discount: "享九折"
        },
        {
          sourceUrl: "//list.mi.com/accessories/tag?id=guangganban",
          imgUrl: "http://i1.mifile.cn/a1/T1HcAQBgDT1RXrhCrK!220x220.jpg",
          title: "小米手环 光感版",
          desc: "实时监测心率，科学运动",
          price: "99"
        }
      ]
    };
  },
  methods: {
    goto () {
      this.$router.push({path: '/goodsDetail0'})
    }
  }
};
</script>

<style scoped>
.boxs-container {
  width: 100%;
  height: auto;
  padding-top: 60px;
  margin-bottom: 26px;
  background: #f5f5f5;
}

.boxs {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
}

.boxs-top {
  width: 100%;
  height: 58px;
}

.top-title {
  float: left;
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.top-sub {
  float: right;
  display: block;
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  cursor: pointer;
}
.sub-icon {
  color: #b0b0b0;
  font-size: 20px;
}
.sub-icon:hover {
  color: #ff6700;
}
.sub-icon {
  color: #ff6700;
}

.box-left {
  float: left;
  width: 234px;
  height: 614px;
  cursor: pointer;
  transition: all 0.3s;
}
.box-left img{
  height: 100%;
  width: 100%;
}
.box-left:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}

.box-right {
  float: left;
  width: 992px;
  height: 628px;
}
.box-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.box-item {
  position: relative;
  margin: 0 0 14px 14px;
  padding: 20px 0;
  width: 234px;
  height: 260px;
  background: #fff;
  transition: all 0.3s;
}
.box-item:hover {
  transform: translateY(-1px);
  box-shadow: 5px 5px 20px #ccc;
}
.discount-label {
  position: absolute;
  top: 0;
  left: 50%;
  width: 64px;
  height: 20px;
  line-height: 20px;
  margin-left: -32px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  z-index: 4;
}

.discount-label .free {
  background-color: #ffac13;
}

.discount-label .new {
  background-color: #83c44e;
}
.discount-label.discount {
  background-color: #e53935;
}
.old-price {
  color: #b0b0b0;
  text-decoration: line-through;
}
img {
  margin-top: 30px !important;
  display: block;
  width: 180px;
  height: 125px;
  margin: 0 auto;
}
.box-title {
  font-size: 14px;
  text-align: center;
  color: #333;
  font-weight: normal;
}
.box-desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #b0b0b0;
}
.box-price {
  color: #ff6700;
  font-size: 14px;
  text-align: center;
}
</style>
