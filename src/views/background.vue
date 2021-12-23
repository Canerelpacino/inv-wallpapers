<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
  <img alt="friends" src="../assets/friends.png" width="350" height="250">
  <img v-on:click="result; showme" src="../assets/b1.png" id="w1" width="83.0566" height="180" style="position: absolute; left: 15%; top: 40%">
  <img v-on:click="result" src="../assets/b2.png" width="83.0566" height="180" style="position: absolute; left: 62%; top: 40%">
  <img v-on:click="result" src="../assets/b3.png" width="83.0566" height="180" style="position: absolute; left: 15%; top: 67%">
  <img v-on:click="result" src="../assets/b4.png" width="83.0566" height="180" style="position: absolute; left: 62%; top: 67%">
  </body>
</template>

<script>
export default {
  name: 'background',
  methods: {
    result: function () {
      this.$router.push('/result')
    }
  }
}
</script>

<style scoped>

</style>
