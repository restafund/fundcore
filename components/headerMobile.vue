<template>
  <header :class="isheader ? `active-header header` : 'header'">
    <div>
      <i class="fas fa-bars" @click="show = !show" />
    </div>
    <div class="logo-container">
      <nuxt-link to="/">
        <img :src="logo" alt="logo">
      </nuxt-link>
    </div>
    <div class="border-circle">
      <nuxt-link to="/joke">
        DAFTAR
      </nuxt-link>
    </div>
    <transition name="slide-fade">
      <ul v-if="show">
        <li
          @click="drop = !drop"
        >
          <a>
            PRODUK
            <i v-if="drop" class="fa fa-chevron-up" aria-hidden="true" />
            <i v-else class="fa fa-chevron-down" aria-hidden="true" />
          </a>
          <transition name="slide-fade">
            <div v-if="drop" class="dropdown-mobile isOpen">
              <div @click="show = !show">
                <nuxt-link to="/listProduct/fun-develop">
                  FUN DEVELOP
                </nuxt-link>
              </div>
              <div @click="show = !show">
                <nuxt-link to="/listProduct/fun-gadai">
                  FUN GADAI
                </nuxt-link>
              </div>
              <div @click="show = !show">
                <nuxt-link to="/listProduct/fun-flip">
                  FUN FLIP
                </nuxt-link>
              </div>
              <div @click="show = !show">
                <nuxt-link to="/listProduct/fun-income">
                  FUN INCOME
                </nuxt-link>
              </div>
            </div>
          </transition>
        </li>
        <li>
          <nuxt-link to="/about">
            PEMINJAM
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/joke">
            PENDANA
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/joke">
            PROYEK
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/joke">
            PORTFOLIO
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/joke">
            MASUK
          </nuxt-link>
        </li>
      </ul>
    </transition>
    <div v-if="show" class="black-screen" @click="show = !show" />
  </header>
</template>

<script>
import logo from '@/assets/logo.svg'
export default {
  name: 'AppHeader',
  data () {
    return {
      logo,
      isOpen: false,
      active: false,
      isheader: false,
      show: false,
      drop: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
      if (this.windowTop > 100) {
        this.isheader = true
      } else {
        this.isheader = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top:0;
  width: 100%;
  z-index: 99999;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0 1px #E1E1E1;
  background-color: white;
  // margin-bottom: 1rem;
  // padding-bottom: 1rem;
  padding: 0 15px;
  // border-bottom: 1px dotted #ccc;
  .title {
    font-size: 3rem;
    color: #526488;
  }
  ul {
    padding: 0;
    width: 275px;
    display: inline-block;
    list-style: none;
    position: absolute;
    left: 0;
    top: 61px;
    background-color: white;
    height: 100vh;
    border-right: solid 1px #d3d3d3;
    li {
      position: relative;
      display: inline-block;
      width: 100%;
      a {
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 0;
        i {
          float: right;
          line-height: 50px;
        }
      }
    }
  }
  .black-screen {
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: black;
    top: 61px;
    left: 0;
    opacity: 0.3;
    z-index: -1;
  }
  a {
    display: inline-block;
    // background-color: #333;
    color: #424242;
    font-size: 14px;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
    text-decoration: none;
    cursor: pointer;
  }
  .border-circle {
    a {
    width: 100px;
    text-align: center;
    background-color: #FFC80A;
    border-radius: 49.5px;
    margin: 0;
    }
  }
}
.active-header {
  background-color: white;
  border-bottom: solid 1px #ddd;
}
.logo-container {
  padding: 0 15px;
  margin-right: 30px;
  img {
    height: 30px;
    width: 132px;
  }
}
.dropdown-mobile {
  // position: absolute;
  display: inline-block;
  border-radius: 0;
  position: relative;
  width: 100%;
  top: 50%;
  transform: translateX(-50%) rotatex(90deg) scale(0);
  margin-top: 0.55em;
  transform-origin: 0 0;
  border-radius: 0.35em;
  background-color: #F9F9F9;
  display: none;
  opacity: 0;
  transition: all 200ms linear;

  &.isOpen {
    transform: translatey(0%);
    display: inline-block;
    opacity: 1;
    border-radius: 0px;
  }
  div {
    height: 50px;
    line-height: 50px;
    padding: 0 25px;
    text-transform: capitalize;
    font-size: 16px;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.black-screen {

}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
