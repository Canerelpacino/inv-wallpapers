<template>
  <div class="home">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <body style="background-color: #151515;">
    <img alt="friends" src="../assets/friends.png" width="350" height="250">
    <input type="button" class="btn" value="SELECT INV FRIEND" v-on:click="select">
    </body>
  </div>
</template>

<script>

export default {
  name: 'Home',

  methods: {
    select: function () {
      this.$router.push('/selectfriends')
    }
  }
}
</script>
<style>
body{
  background-color: #151515;
}
.btn{
  background-color: #BEBEBE;
  border: none;
  padding: 20px 45px;
  text-align: center;
  font-size: 20px;
  display: inline-block;
  font-family: Candara;
  position: absolute;
  top: 50%;
  left: 17%;
}
</style>
