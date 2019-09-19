<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="img-footer">
        <img :src="logo">
      </div>
      <div class="list-footer">
        <div v-for="(footer, index) in footerMenu" :key="index" class="list-menu">
          <span>{{ footer.name }}</span>
          <li v-for="(list, i) in footer.menu" :key="i">
            <a>{{ list.name }}</a>
          </li>
        </div>
      </div>
      <div class="social-media">
        <span>FOLLOW US</span>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
          </div>
           <div class="icon">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="icon">
            <i class="fab fa-linkedin"></i>
          </div>
      </div>
    </div>
    <div class="legancy">
      <span>© 2019 RESTAFUND. All rights reserved.</span>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/logo.svg'
export default {
  name: 'Footer',
  data () {
    return {
      logo,
      footerMenu: [
        {
          name: 'PRODUCT',
          menu: [
            { name: 'Fun Develop' },
            { name: 'Fun Income' },
            { name: 'Fun Gadai' },
            { name: 'Fun Flip' }
          ]
        },
        {
          name: 'COMPANY',
          menu: [
            { name: 'Press Releases' },
            { name: 'Mission' },
            { name: 'Strategy' },
            { name: 'Works' }
          ]
        },
        {
          name: 'INFO',
          menu: [
            { name: 'Support' },
            { name: 'Developers' },
            { name: 'Customer Service' },
            { name: 'Ger Started Guide' }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/footer.scss'
</style>
