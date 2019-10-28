<template>
  <div class="container layout-container">
    <section>
      <h2>Project</h2>
      <div class="wrapper">
        <projectCard :projectData="project" />
      </div>
    </section>
  </div>
</template>

<script>
import projectCard from '@/components/smallComponents/projectCard'
import ImgList from '@/assets/room.jpeg'
export default {
  name: 'PortfolioPage',
  components: {
    projectCard
  },
  data () {
    return {
      ImgList,
      project: [
        {
          img: ImgList,
          pendana: '7',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 800.000.000'
        },
        {
          img: ImgList,
          pendana: '12',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 900.000.000'
        },
        {
          img: ImgList,
          pendana: '17',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 1.900.000.000'
        },
        {
          img: ImgList,
          pendana: '34',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 12.900.000.000'
        },
        {
          img: ImgList,
          pendana: '7',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 800.000.000'
        },
        {
          img: ImgList,
          pendana: '12',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 900.000.000'
        },
        {
          img: ImgList,
          pendana: '17',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 1.900.000.000'
        },
        {
          img: ImgList,
          pendana: '34',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 12.900.000.000'
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
