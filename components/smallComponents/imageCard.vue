<template>
  <div>
      <div v-for="(list, i) in dataArray" :key="i" class="wrapper-cards">
        <div class="container-cards">
          <div class="image">
              <img :src="list.image">
          </div>
          <div class="content-cards">
            <h4>{{ list.location }}</h4>
            <span>
              <i class="fas fa-map-marker-alt"></i>
              {{ list.city }}
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import room from '@/assets/room.jpeg'
export default {
  name: 'ImageCard',
  props: {
    dataArray: {
      type: Array,
      default: Function
    }
  },
  data () {
    return {
      room
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-cards {
  padding: 15px;
  display: inline-block;
  width: (100% / 3);
}
.container-cards {
    min-height: 350px;
    background-color:#F7F8F9;
    border-radius: 8px;
    .image {
      img {
        width: 100%;
        border-radius: 8px 8px 0 0;
      }
    }
    .content-cards {
      padding: 15px;
      h4 {
        margin: 10px 0;
        font-size: 18px;
        color: #212121;
      }
      span {
        color:#424242;
        font-size: 16px;
      }
    }
}
</style>
