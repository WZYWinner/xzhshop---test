<template>
  <div id="app">
    <top-header v-show="$route.name!=='Register'&&$route.name!=='Login'"></top-header>
    <!-- <top-banner></top-banner> -->
    <router-view/>
    <!-- <payment/> -->
    <temp-footer v-show="$route.name!=='Register'&&$route.name!=='Login'"></temp-footer>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import GoodsTopBox from './components/GoodsTopBox'
import TempFooter from './components/TempFooter'
import Payment from './components/Payment'
export default {
  name: 'App',
  components: {
     'top-header': TopHeader,
     'goods-top-box': GoodsTopBox,
    'temp-footer': TempFooter,
    'payment': Payment
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
