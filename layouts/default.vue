<template>
  <div class="container-outside">
    <appHeader />
    <nuxt />
    <appFooter />
  </div>
</template>
<script>
import appHeader from '../components/header'
import appFooter from '../components/footer'
export default {
  components: {
    appHeader, appFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,800&display=swap');
@import '@/plugins/fontAwesome/fontawesome.scss';
@import '@/plugins/fontAwesome/solid.scss';
@import '@/plugins/fontAwesome/brands.scss';
@import '@/plugins/fontAwesome/regular.scss';
@import '@/styles/layout.scss';
</style>
