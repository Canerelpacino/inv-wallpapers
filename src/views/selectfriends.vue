<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
  <img alt="friends" src="../assets/friends.png" width="350" height="250">
  <img v-on:click="bg" src="../assets/n1.png" width="190" height="190" style="position: absolute; left: 2%; top: 40%">
  <img v-on:click="bg1" src="../assets/n2.png" width="190" height="190" style="position: absolute; left: 45%; top: 40%">
  <img v-on:click="bg2" src="../assets/n3.png" width="190" height="190" style="position: absolute; left: 2%; top: 67%">
  <img v-on:click="bg3" src="../assets/n4.png" width="190" height="190" style="position: absolute; left: 45%; top: 67%">
  </body>
</template>

<script>
export default {
  name: 'selectfriends',
  methods: {
    bg: function () {
      this.$router.push('/c1')
    },
    bg1: function () {
      this.$router.push('/c2')
    },
    bg2: function () {
      this.$router.push('/c3')
    },
    bg3: function () {
      this.$router.push('/c4')
    },
  }
}
</script>

<style scoped>

</style>
