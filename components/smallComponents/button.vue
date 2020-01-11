<template>
  <button
    :class="background"
    :style="`font-size: ${size}px`"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'ButtonResta',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    background: {
      type: String,
      default: 'yellow'
    },
    size: {
      type: String,
      default: '12'
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.yellow {
  height: 48px;
  min-width: 200px;
  border-radius: 49.5px;
  background-color: #FFC80A;
  color: #292929;
  font-size: 12px;
  border: none;
  padding: 0 40px;
}
.blue {
  height: 48px;
  min-width: 200px;
  border-radius: 49.5px;
  background-color: #28458F;
  color: #FFC80A;
  font-size: 12px;
  border: none;
  padding: 0 40px;
}
.white {
  height: 48px;
  min-width: 200px;
  border-radius: 49.5px;
  background-color: #F1F1F1;
  color:#28458F;
  font-size: 12px;
  border: none;
  padding: 0 40px;
}
button {
  cursor: pointer;
  outline: none;
}

</style>
