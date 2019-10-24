<template>
	<div class="lunbo">
	<el-carousel :interval="5000" arrow="always" height="460px">
    <el-carousel-item v-for="item in banners" :key="item">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			banners: [
				{sourceUrl: '//item.mi.com/buyphone/mi5', imgUrl: require('../assets/img/lunbo1.png')},
				{sourceUrl: '//item.mi.com/buyphone/hongmi3s', imgUrl: require('../assets/img/lunbo2.png')},
				{sourceUrl: '//item.mi.com/buyphone/mimax', imgUrl: require('../assets/img/lunbo3.png')},
				{sourceUrl: '//item.mi.com/buymitv/48', imgUrl: require('../assets/img/lunbo4.png')}
			]
		}
	},
	methods: {
	},
}
</script>

<style scoped>
	.lunbo{
		width: 1226px;
		margin: 40px auto;
	}
	.lunbo img{
		width: 100%;
		height: 100%;
	}
</style>