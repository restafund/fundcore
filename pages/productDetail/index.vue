<template>
<div class="container layout-container">
    <section>
      <div class="wrapper-head">
        <div class="carosel">
          <Carosel />
        </div>
        <div class="content">
          <h1>Airy Room Eco Syariah BSD Serpong</h1>
          <div class=""></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carosel from '@/components/smallComponents/ImageCarosel'

export default {
  name: 'ProductDetail',
  components: {
    Carosel
  }
}
</script>
<style lang="scss" scoped>
 .wrapper-head {
   width: 100%;
   .carosel {
     width: 50%;
     float: left;
   }
   .content {
     float: left;
     width: 50%;
     text-align: left;
     padding: 0 30px;
   }
 }
</style>
