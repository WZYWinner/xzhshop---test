<template>
  <div id="app">
    <top-header></top-header>
    <!-- <top-banner></top-banner> -->
    <!-- <router-view/> -->
    <!-- <goods-top-box></goods-top-box> -->
    <goods-detail0></goods-detail0>
    <!-- <temp-footer></temp-footer> -->
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import TopBanner from './components/TopBanner'
import GoodsTopBox from './components/GoodsTopBox'
import GoodsDetail0 from './components/GoodsDetail0'
import TempFooter from './components/TempFooter'
export default {
  name: 'App',
  components: {
     'top-header': TopHeader,
     'top-banner': TopBanner,
     'goods-top-box': GoodsTopBox,
    'goods-detail0': GoodsDetail0,
    'temp-footer': TempFooter
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
