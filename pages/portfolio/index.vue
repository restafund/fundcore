<template>
  <div class="container layout-container">
    <section>
      <h2>PORTFOLIO</h2>
      <div class="wrapper">
        <ImageCard :dataArray="listPortofolio" />
      </div>
    </section>
  </div>
</template>

<script>
import ImageCard from '@/components/smallComponents/imageCard'
import ImgList from '@/assets/room.jpeg'
export default {
  name: 'PortfolioPage',
  components: {
    ImageCard
  },
  data () {
    return {
      ImgList,
      listPortofolio: [
        {
          location: 'Pademangan',
          city: 'Jakarta',
          image: ImgList
        },
        {
          location: 'Dekat rumah dika',
          city: 'Bandung',
          image: ImgList
        },
        {
          location: 'Duren tiga',
          city: 'Bandung',
          image: ImgList
        },
        {
          location: 'Tanjung duren',
          city: 'Aceh',
          image: ImgList
        },
        {
          location: 'Grogol',
          city: 'Jakarta',
          image: ImgList
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: left;
}
.wrapper {
  margin: 20px 0;
}
</style>
