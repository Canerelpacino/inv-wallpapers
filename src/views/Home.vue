<template>
  <div class="home">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <body style="background-color: #151515;">
    <img alt="friends" src="../assets/friends.png" width="350" height="250">
    <button v-on:click="select" class="button1">SELECT CHARACTER</button>
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
.button1{

  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  padding: 14px 24px;
  border: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  color: #fff;
}
</style>
