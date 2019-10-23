<template>
  <div class="container layout-container">
    <section class="product-section">
      <div class="img-banner">
        <img :src="product1">
      </div>
      <div class="content-product">
        <div class="content">
          <span>PRODUCT</span>
          <h2>FUN DEVELOP</h2>
          <p>
            Fund Development adalah pendanaan yang membantu para developer atau pemilik lahan atau pemilik proyek untuk membangun perumahan atau komersil yang sudah punya IMB dan siap dibangun.
          </p>
          <buttonResta
            background="yellow"
            label="SELENGKAPNYA"
            size="14"
            @click="nextPage('fun-develop')"
          />
        </div>
        <span class="bg-number">01</span>
      </div>
    </section>
    <section class="product-section">
      <div class="content-product">
        <div class="content">
          <span>PRODUCT</span>
          <h2>FUN GADAI</h2>
          <p>
            Fund Gadai adalah pendanaan yang membantu para pemilik properti yang Butuh Uang Cepat dengan jaminan properti bersertifikat
          </p>
          <buttonResta
            background="yellow"
            label="SELENGKAPNYA"
            size="14"
            @click="nextPage('fun-gadai')"
          />
        </div>
        <span class="bg-number">02</span>
      </div>
      <div class="img-banner">
        <img :src="p2">
      </div>
    </section>
    <section class="product-section">
      <div class="img-banner">
        <img :src="p3">
      </div>
      <div class="content-product">
        <div class="content">
          <span>PRODUCT</span>
          <h2>FUN FLIP</h2>
          <p>
            Fund Flip adalah pendanaan untuk membantu para pemilik properti yang Butuh Jual Cepat dengan harga dibawah NJOP atau maksimal 70% dari harga pasar.
          </p>
          <buttonResta
            background="yellow"
            label="SELENGKAPNYA"
            size="14"
            @click="nextPage('fun-flip')"
          />
        </div>
        <span class="bg-number">03</span>
      </div>
    </section>
    <section class="product-section">
      <div class="content-product">
        <div class="content">
          <span>PRODUCT</span>
          <h2>FUN INCOME</h2>
          <p>
            Fund Income adalah crowdfunding untuk proyek jangka panjang seperti kost, hotel, foodcourt, lahan parkir, komersil, coworking space, coliving, dan properti yang produktif
          </p>
          <buttonResta
            background="yellow"
            label="SELENGKAPNYA"
            size="14"
            @click="nextPage('fun-income')"
          />
        </div>
        <span class="bg-number">04</span>
      </div>
      <div class="img-banner">
        <img :src="p4">
      </div>
    </section>
  </div>
</template>

<script>
import product1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import buttonResta from '../../components/smallComponents/button'

export default {
  name: 'ListProduct',
  components: {
    buttonResta
  },
  data () {
    return {
      product1, p2, p3, p4
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
.product-section {
    padding: 40px 0;
    display: inline-block;
    width: 100%;
    .img-banner {
        width: 50%;
        display: inline-block;
        float: left;
        img {
            width: 100%;
        }
    }
    .content-product {
        width: 50%;
        display: inline-block;
        float: left;
        position: relative;
        .bg-number {
            font-size: 427px;
            color: #EEEEEE;
            position: absolute;
            top: -125px;
            height: 100px;
            font-weight: bold;
            left: -30px;
            z-index: -1;
        }
        .content {
            width: 450px;
            display: inline-block;
            float: right;
            padding: 20px;
            margin-top: 30px;
            text-align: left;
            span {
                color: #888888;
                font-size: 12px;
            }
            p {
                font-size: 16px;
                color: #444444;
                margin-bottom: 20px;
            }
            h2 {
                margin: 14px 0;
            }
        }
    }
}

@media screen and (max-width: 480px) {
  .product-section {
    padding: 0;
    display: inline-block;
    width: 100%;
    .img-banner {
        width: 100%;
        display: inline-block;
        float: left;
        img {
            width: 100%;
        }
    }
    .content-product {
        width: 100%;
        display: inline-block;
        float: left;
        position: relative;
        .bg-number {
            font-size: 350px;
            color: #EEEEEE;
            position: absolute;
            top: -125px;
            height: 100px;
            font-weight: bold;
            left: -30px;
            z-index: -1;
        }
        .content {
            width: 100%;
            display: inline-block;
            float: right;
            padding: 20px;
            margin-top: 30px;
            text-align: left;
            span {
                color: #888888;
                font-size: 12px;
            }
            p {
                font-size: 16px;
                color: #444444;
                margin-bottom: 20px;
            }
            h2 {
                margin: 14px 0;
            }
        }
    }
}
}
</style>
