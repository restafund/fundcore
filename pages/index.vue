<template>
  <div>
    <sliderHome />
    <section class="benefit-section">
      adasd
    </section>
    <div class="container">
      <h2 class="subtitle">
        restafund Core
        <i class="fa fa-address-book" aria-hidden="true" />
      </h2>
    </div>
  </div>
</template>

<script>
import sliderHome from '../components/sliderHome'
export default {
  components: {
    sliderHome
  },
  head () {
    return {
      title: 'Home tutorial',
      meta: [
        {
          hid: 'dio ganteng nih',
          name: 'description dio ganss',
          content: 'Best nih dio'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/styles/home.scss';
</style>
