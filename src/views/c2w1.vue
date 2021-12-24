<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
  <div class="content">
    <h2>LFG!!</h2>
    <h2>LFG!!</h2>
  </div>
  <h3 id="h3">TAP LONG TO SAVE</h3>
  <img src="../assets/c2w1.png" width="230.712891" height="500" class="wallpaper">
  </body>
</template>

<script>
export default {
  name: 'c1w1'
}
</script>

<style scoped>
.wallpaper {
  margin: auto;
  display: block;
  position: absolute;
  top: 25%;
}
h3 {
  font-size: 30px;
  position: absolute;
  top: 17%;
  color: yellow;
}
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");
* {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  background: #000;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.content {
  position: absolute;
  top: 12%;
}

.content h2 {
  color: #fff;
  font-size: 4em;
  position: absolute;
  transform: translate(-50%, -50%);
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px yellow;
}

.content h2:nth-child(2) {
  color: yellow;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
body {
  background-color:  #151515;
}
</style>
