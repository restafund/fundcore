<template>
  <div>
    <div class="head-card">
      <img :src="Carosel">
    </div>
    <div class="body-card">
      <div class="containers-slider">
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
        <div class="wrapper-card">
          <img :src="Carosel2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carosel from '@/assets/carosel1.jpg'
import Carosel2 from '@/assets/carosel2.jpg'
export default {
  name: 'Carosel',
  props: {
    label: {
      type: String,
      default: 'Alert'
    },
    background: {
      type: String,
      default: 'green'
    }
  },
  data () {
    return {
      Carosel,
      Carosel2
    }
  }
}
</script>

<style lang="scss" scoped>
.head-card {
  img {
    width: 100%;
  }
}
.body-card {
  width: 100%;
  display: inline-block;
  overflow-x: scroll;
  .containers-slider {
    width: 1800px;
    .wrapper-card {
      height: 100px;
      width: 150px;
      float: left;
      margin: 10px;
      img {
        border-radius: 4px;
        width: 100%;
      }
    }
  }
}
</style>
