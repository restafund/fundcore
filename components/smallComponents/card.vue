<template>
    <div class="wrapper green">
        {{ label }}
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    label: {
      type: String,
      default: 'Alert'
    },
    background: {
      type: String,
      default: 'green'
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  min-height: 96px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  padding: 30px;
}
.green {
    background-color: rgba(181, 222, 218, 0.5);
}
</style>
