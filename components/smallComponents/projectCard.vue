<template>
  <div>
    <div v-for="(data, index) in projectData" :key="index" class="wrap-card">
      <div class="card-project">
        <div class="img">
          <img :src="data.img" alt="house">
        </div>
        <div class="content">
          <span class="color-brown fz-12">{{ data.pendana }} Pendana</span>
          <p>
            {{ data.description }}
          </p>
        </div>
        <div class="total">
          <span class="color-blue fz-16 f-bold">{{ data.price }}</span>
          <div class="progress-bar-resta">
            <span class="behind" />
            <span class="core" />
          </div>
        </div>
        <div class="fund-now">
          <buttonResta
            background="yellow"
            label="DANAI SEKARANG"
            size="14"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonResta from '@/components/smallComponents/button'
export default {
  name: 'ProjectCard',
  components: {
    buttonResta
  },
  props: {
    projectData: {
      type: Array,
      default: Function
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-card {
  padding: 0 15px;
  height: 420px;
  width: (100%/ 4);
  float: left;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 15px 0;
  }
}
.card-project {
  border-radius: 8px;
  background-color: #FFFFFF;
  display: inline-block;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1);
  .img {
    width: 100%;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
  .content {
      padding: 0 15px;
      p {
        font-size: 16px;
        font-weight: bold;
        color: #000000;
      }
    }
    .total {
      margin-top: 15px;
      padding: 0 15px;
      width: 100%;
      height: 60px;
      display: inline-block;

    }
    .fund-now {
      margin: 15px 0;
      padding: 0 15px;
    }
}
</style>
