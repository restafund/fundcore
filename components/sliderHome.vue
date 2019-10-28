<template>
  <div class="wrapper-banner">
    <div class="wallpaper-home">
      <div class="background-home">
        <img :src="bgOne" alt="big">
      </div>
      <div class="wallpaper-content">
        <div class="content-list">
          <span class="fz-14">RESTAFUND PROJECTS</span>
          <h1 class="fz-56">
            Semua Orang Bisa Berinvestasi
          </h1>
          <span class="fz-18">di Properti dengan Aman dan Mudah</span>
          <div class="btn-wraper">
            <ButtonResta
              :label="'DAFTAR SEKARANG'"
            />
          </div>
        </div>
        <div class="trigger-banner arrow-left">
          <i class="fa fa-arrow-left" aria-hidden="true" />
        </div>
        <div class="trigger-banner arrow-right">
          <i class="fa fa-arrow-right" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div class="list-project">
      <div v-for="(list, index) in project" :key="index" class="box-project">
        <div class="content-list">
          <span class="fz-56 color-blue">{{ list.value }}</span>
          <span class="fz-20 color-gray">{{ list.name }}</span>
        </div>
      </div>
      <div class="circle">
        <img :src="circle" alt="circle">
      </div>
    </div>
  </div>
</template>
<script>
import bgOne from '@/assets/wallpaper.png'
import ButtonResta from '@/components/smallComponents/button'
import circle from '@/assets/circle-red.svg'
export default {
  name: 'SliderHome',
  components: {
    ButtonResta
  },
  data () {
    return {
      bgOne,
      circle,
      project: [
        {
          name: 'Proyek',
          value: '19'
        },
        {
          name: 'Nilai Total Proyek',
          value: '52,8 M'
        },
        {
          name: 'Investor Terdaftar',
          value: '62'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/slider-home.scss';
</style>
