<template>
  <button
    class="button-resta"
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
.button-resta {
  height: 48px;
  min-width: 200px;
  border-radius: 49.5px;
  background-color: #FFC80A;
  color: #292929;
  font-size: 12px;
  border: none;
}
</style>
