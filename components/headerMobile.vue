<template>
  <header :class="isheader ? `active-header header` : 'header'">
    <div>
      <i class="fas fa-bars" @click="show = !show" />
    </div>
    <div class="logo-container">
      <img :src="logo" alt="logo">
    </div>
    <div class="border-circle">
      <nuxt-link to="/joke">
        DAFTAR
      </nuxt-link>
    </div>
    <transition name="slide-fade">
      <ul v-if="show">
        <li
          :class="{ active }"
          @click="isOpen = !isOpen
                  active = !active"
        >
          <a>
            PRODUK
            <i class="fa fa-chevron-down" aria-hidden="true" />
            <div :class="{ isOpen }" class="dropdown">
              <ul>
                <li>dasd</li>
                <li>asda</li>
              </ul>
            </div>
          </a>
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
      show: false
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
  margin-right: 65px;
  img {
    height: 30px;
    width: 132px;
  }
}
.dropdown {
  position: absolute;
  left: 50%;
  transform: translatex(-50%) rotatex(90deg) scale(0);
  margin-top: 0.55em;
  transform-origin: 0 0;
  border-radius: 0.35em;
  background-color: rgba(black, 0.15);
  visibility: hidden;
  opacity: 0;
  transition: all 200ms linear;

  &.isOpen {
    transform: translatex(-50%);
    visibility: visible;
    opacity: 1;
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
</style>
