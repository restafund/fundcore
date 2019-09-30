<template>
  <div class="container-outside">
    <appHeader v-if="$device.isDesktop || $device.isTablet" />
    <appHeaderMobile v-else />
    <nuxt />
    <appFooter />
  </div>
</template>
<script>
import appHeader from '../components/header'
import appFooter from '../components/footer'
import appHeaderMobile from '../components/headerMobile'
export default {
  components: {
    appHeader, appFooter, appHeaderMobile
  },
  methods: {
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
