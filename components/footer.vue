<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="img-footer">
        <img :src="logo" alt="logo">
        <p>
          Jl. Jend. Sudirman Kav. 52-53,<br>
          Indonesia Stock Exchange Tower 2, 17th floor, Jakarta Selatan<br>
          admin@restafund.com<br>
          HOTLINE: 021-5291 7474<br>
          WA: 0813 8486 8080 / 081 871 9090<br>
        </p>
      </div>
      <div class="list-footer">
        <div v-for="(footer, index) in footerMenu" :key="index" class="list-menu">
          <span>{{ footer.name }}</span>
          <ul>
            <li v-for="(list, i) in footer.menu" :key="i">
              <a @click="nextPage(list.slug)">{{ list.name }}</a>
            </li>
          </ul>
        </div>
        <div class="social-media">
          <span>FOLLOW US</span>
          <div class="icon">
            <i class="fab fa-facebook-f" />
          </div>
          <div class="icon">
            <i class="fab fa-twitter" />
          </div>
          <div class="icon">
            <i class="fab fa-linkedin" />
          </div>
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
            { name: 'Fun Develop', slug: 'fun-develop' },
            { name: 'Fun Income', slug: 'fun-income' },
            { name: 'Fun Gadai', slug: 'fun-gadai' },
            { name: 'Fun Flip', slug: 'fun-flip' }
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
  },
  methods: {
    nextPage (link) {
      this.$router.push({
        path: '/listProduct/' + link
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/footer.scss'
</style>
