<template>
  <div class="container">
    <section class="product-detail">
      <div class="content-detail">
        <h1>FUN DEVELOP</h1>
        <p>Fund Development adalah pendanaan yang membantu para developer atau pemilik lahan atau pemilik proyek untuk membangun perumahan atau komersil yang sudah punya IMB dan siap dibangun.</p>
        <buttonResta
          background="yellow"
          label="AJUKAN FUN DEVELOP"
          size="14"
        />
      </div>
      <div class="img-content">
        <img :src="wallpaper">
      </div>
    </section>
    <section class="tab-wrapper">
      <div class="head-tab">
        <ul>
          <li class="active">FUN DEVELOP</li>
          <li>FUN GADAI</li>
          <li>FUN FLIP</li>
          <li>FUN INCOME</li>
        </ul>
      </div>
      <div class="body-tab">
        <div class="container">
          <div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import buttonResta from '../../components/smallComponents/button'
import wallpaper from '../../assets/wallpaper1.jpg'
export default {
  name: 'productDetail',
  components: {
    buttonResta
  },
  data () {
    return {
      wallpaper
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: visible;
}
.content-detail {
  width: 35%;
  text-align: left;
  display: inline-block;
  float: left;
  padding-right: 30px;
  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  p {
    color: #444444;
    font-size: 18px;
    margin-bottom: 30px;
  }
}
.img-content {
  width: 65%;
  text-align: left;
  display: inline-block;
  float: left;
  img {
    width: 100%;
  }
}
.tab-wrapper {
  display: inline-block;
  width: 100%;
  .head-tab {
    ul {
      list-style: none;
      display: inline-block;
      width: 100%;
      padding: 0;
      li {
        display: inline-block;
        width: calc(100%/4);
        float: left;
        height: 60px;
        line-height: 60px;
        border-top: solid 2px #e1e1e1;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #f7f7f7;
        }
        &.active {
          color: #28458F;
          border-top: solid 4px #28458F;
        }
      }
    }
  }
  .body-tab {
    background-color: #F9F9F9;
    margin: 0 -15%;
  }
}
</style>
