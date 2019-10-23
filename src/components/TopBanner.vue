<template>
	<div class="carousel-box" style="width:100%">
      <el-carousel :interval="3000" trigger="click" height="500px">
        <el-carousel-item v-for="(item,index) in banners" :key="index">
          <img :src="item.imgUrl" alt="" class="carousel-img">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
	data() {
		return {
			banners: [
				{sourceUrl: '//item.mi.com/buyphone/mi5', imgUrl: '../assets/logo.png'},
				{sourceUrl: '//item.mi.com/buyphone/hongmi3s', imgUrl: '../assets/img/lunbo2.png'},
				{sourceUrl: '//item.mi.com/buyphone/mimax', imgUrl: '../assets/img/lunbo3.png'},
				{sourceUrl: '//item.mi.com/buymitv/48', imgUrl: '../assets/img/lunbo4.png'}
			]
		}
	},
	methods: {
	},
}
</script>

<style scoped>
	.carousel-img{
		min-width: 100%;
    height: 100%;
	}
</style>