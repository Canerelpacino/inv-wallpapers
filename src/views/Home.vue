<template>
  <div class="home">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <body style="background-color: #151515;">
    <img alt="friends" src="../assets/friends.png" width="350" height="250">
      <button class="bn54">
        <span class="bn54span" v-on:click="select">SELECT CHARACTER</span>
      </button>
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
.bn54 {
  position: relative;
  left: 100px;
  top: 50px;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 45px;
  width: 130px;
  opacity: 1;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.6);
}

.bn54 .bn54span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

.bn54:hover {
  animation: bn54rotate 0.7s ease-in-out both;
}

.bn54:hover .bn54span {
  animation: bn54storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes bn54rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes bn54storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
</style>
