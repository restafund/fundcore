<template>
  <header class="header">
    <div class="logo-container">
      <img :src="logo">
    </div>
    <ul>
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
      <li class="border-circle">
        <nuxt-link to="/joke">
          DAFTAR
        </nuxt-link>
      </li>
    </ul>
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
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 1rem;
  // padding-bottom: 1rem;
  padding: 0 30px;
  // border-bottom: 1px dotted #ccc;
  .title {
    font-size: 3rem;
    color: #526488;
  }
  ul {
    display: flex;
    list-style: none;
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
    }
  }
}
.logo-container {
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
</style>
