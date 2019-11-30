<template>
  <div class="payment">
    <div class="payment_content">
      <div class="title">确认订单信息</div>
      <div class="introduce">
        <ul>
          <li>宝贝图片</li>
          <li>宝贝名称</li>
          <li>单价</li>
          <li>数量</li>
          <li>总计</li>
        </ul>
      </div>
      <div class="info">
        <div class="goods-img">
          <img :src="goodsImg" alt />
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="single-price">{{singlePrice}}</div>
        <div class="num">{{goodsNum}}</div>
        <div class="total">{{(singlePrice*goodsNum).toFixed(2)}}</div>
      </div>
      <div class="userInfo">
        <div class="address">
          地址信息：
          <v-distpicker :province="province" :city="city" :area="area" @selected="onSelected"></v-distpicker>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="详细地址">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="邮政编码">
              <el-input style="width:200px" v-model="form.bianma"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input style="width:200px" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input style="width:200px" v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="顺丰加急">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <!-- <el-form-item label="付款方式">
              <el-radio-group v-model="form.resource">
                <el-radio label="货到付款"></el-radio>
                <el-radio @click="paycode" label="扫码付款"></el-radio>
              </el-radio-group>
              
            </el-form-item> -->
            <div class="pay-type">
                <span>付款方式</span><span @click="isChoose1" :class="{active:isChoose === 1}">货到付款</span><span @click="isChoose2" :class="{active:isChoose === 2}">扫码付款</span>
            </div>
            <div class="pay-code" v-show="isLock">
                  <img src="../assets/img/pay_code.png" alt="">
              </div>
            <!-- <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item> -->
            <!-- <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item> -->
          </el-form>
        </div>
      </div>
      <div class="confirm" @click="confirm"><span>确认订单</span></div>
    </div>
    <div class="jiesuan" v-show="isLock1">
						<div class="success">
							<div class="tishi">
								<img src="../assets/img/pay_success.png" alt="">
								<span>购买成功</span>
							</div>
						<div class="close" @click="quxiao"><img src="../assets/img/close.png" alt=""></div>
						</div>
					</div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isLock1: false,
        goodsImg: '',
        goodsName: '',
        singlePrice: '',
        goodsNum: '',
        goodsTotal: '',
          isChoose: 1,
        isLock: false,
        province: '',
        city: '',
        area: '',
        form: {
          name: '',
          address: '',
          bianma: '',
          tel: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
        confirm: function() {
            if(this.province===''||this.city===''||this.area===''||this.form.address===''||this.form.bianma===''||this.form.name===''||this.form.tel===''){
                alert("信息未填写完整")
            }else{
              this.isLock1 = true
            }
        },
        quxiao: function () {
              this.isLock1 = false
              this.$router.push('/')
	    	},
        isChoose1: function() {
            this.isChoose = 1
            this.isLock = false
        },
        isChoose2: function() {
            this.isChoose = 2
            this.isLock = true
        },
        paycode: function() {
            
            console.log(this.isLock)
        },
      onSubmit() {
        console.log('submit!');
      },
      onSelected(data) {
                this.province = data.province.value;
                this.city = data.city.value;
                this.area = data.area.value;
                this.ruleForm.province = this.province;
                this.ruleForm.city = this.city;
                this.ruleForm.area = this.area;
            }
    },
    mounted(){
        console.log(this.$route.params)
        this.goodsImg=this.$route.params.img
        this.goodsName=this.$route.params.name
        this.singlePrice=this.$route.params.price
        this.goodsNum=this.$route.params.num
        console.log(this.goodsImg)
    }
  }
</script>

<style scoped>
.payment{
  background: #f5f5f5;
    
}
.payment_content {
  width: 1226px;
  margin: 30px auto;
  padding: 20px 40px;
  /* border-top: #f5f5f5 solid 2px; */

  /* border: black solid 1px; */
}
.payment_content .title {
  line-height: 25px;
  color: #333;
  font-weight: 700;
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 3px solid #b2d1ff;
}
.payment_content .info {
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px dotted #80b2ff;
  background-color: rgb(242, 247, 255);
}
.payment_content .introduce ul {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
  align-items: center;
  border-bottom: 1px dotted #80b2ff;
  color: #6c6c6c;
  font-size: 14px;
  background-color: rgb(242, 247, 255);
}
.single-price,
.num {
  color: #6c6c6c;
}
.total {
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  color: rgb(255, 0, 54);
  font-size: 16px;
}
.userInfo {
    padding: 20px 0;
  margin-top: 40px;
  /* background-color: rgb(242, 247, 255); */
}
.address {
  display: flex;
  align-items: center;
  margin-left: 12px;
  font-size: 14px;
    color: #606266;
    margin-bottom: 24px;
}
.pay-code img{
    width: 100px;
    height: 100px;
    margin-left: 88px;
}
.pay-type{
    margin-left: 12px;
    font-size: 14px;
    color: #606266;
    margin-bottom: 24px;
}
.pay-type span:nth-child(2){
    padding: 10px;
    margin-left: 15px;
    cursor: pointer;
    border-radius: 4px;
}
.pay-type span:nth-child(3){
    padding: 10px;
    margin-left: 30px;
    cursor: pointer;
    border-radius: 4px;
}
.active{
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
}
.confirm{
    display: flex;
    justify-content: flex-end;
    margin: 40px 0;
}
.confirm span{
    width: 182px;
    height: 39px;
    position: relative;
    vertical-align: middle;
    line-height: 39px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    background: #dd2727;
    color: #fff;
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