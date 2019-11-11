<template>
  <div class="container error-page">
    <section v-if="error.statusCode === 404">
      <h1>Error: 404 Page Not Found </h1>
      <div>
        <img :src="notFound">
      </div>
      <p>Sorry, the page you're looking for cannot be accessed.
        Either check the URL, go to <nuxt-link to="/">Home page</nuxt-link>, or feel free to report this issue to support@restafund.com</p>
    </section>
    <section v-else>
     <h1>Error: 500 Unexpected Error</h1>
      <div>
        <img :src="errorFound">
      </div>
      <p>An error ocurred and your request couldn’t be completed.
        Either check the URL, go to <nuxt-link to="/">Home page</nuxt-link>, or feel free to report this issue to support@restafund.com</p>
    </section>
  </div>
</template>

<script>
import notFound from '../assets/404.svg'
import errorFound from '../assets/500.svg'
export default {
  props: ['error'],
  data () {
    return {
      notFound,
      errorFound
    }
  }
//   layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scope>
  .error-page {
    section {
      text-align: center;
      img {
        margin: 40px 0;
      }
      p {
        width: 400px;
        color: #373A3C;
        display: inline-block;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .error-page {
    section {
      text-align: center;
      img {
        margin: 40px 0;
        width: 100%;
      }
      p {
        width: 100%;
        color: #373A3C;
        display: inline-block;
      }
    }
  }
  }
</style>
