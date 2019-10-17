<template>
  <div class="tos">{{$route.params.id}}</div>
</template>

<script>
export default {
  name: 'tabs',
  key (route) {
    return route.fullPath
  },
  data () {
    return {
      env: {
        users: [
          { id: 1, name: 'Kobe Bryant', number: 24 },
          { id: 2, name: 'Michael Jordan', number: 23 },
          { id: 3, name: 'Stephen Curry', number: 30 },
          { id: 4, name: 'Lebron James', number: 23 },
          { id: 5, name: 'Kevin Durant', number: 35 },
          { id: 6, name: 'Kyrie Irving', number: 2 }
        ]
      }
    }
  }
}
</script>
