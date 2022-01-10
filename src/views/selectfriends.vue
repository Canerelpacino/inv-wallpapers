<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
  <div class="row section-intro"><div class="col-twelve"><h5>by caner#0251</h5><h1>Create your IF Wallpaper</h1><p class="lead"><span style="color: rgb(150, 149, 149);"></span></p></div></div>
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
    }
  }
}
</script>

<style scoped>
.section-intro {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 3.6rem;
  position: relative;
}
.row {
  width: 94%;
  max-width: 1140px;
  margin: 0 auto;
}
.col-twelve, .col-full {
  width: 100%;
}
.section-intro h5 {
  color: yellow;
}
@media only screen and (max-width: 600px){
  .section-intro h5 {
    font-size: 1.5rem;
    letter-spacing: .0rem;
  }}
.section-intro h5 {
  line-height: 1.875;
  margin-bottom: 0.3rem;
}
h5 {
  text-transform: uppercase;
  font-family: "Berlin Sans FB";
  text-rendering: optimizeLegibility;
  font-variant-ligatures: common-ligatures;
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
*, *::before, *::after {
  box-sizing: inherit;
}
.section-intro h1 {
  color: white;
}
@media only screen and (max-width: 600px){
  .section-intro h1 {
    font-size: 2.6rem;
  }}
.section-intro h1 {
  line-height: 1.25;
  margin-bottom: 1.2rem;
}
@media only screen and (max-width: 600px){
h1 {
  letter-spacing: -.07rem;
}}
h1{
  text-transform: uppercase;
  font-family: "Berlin Sans FB";
  font-style: normal;
  text-rendering: optimizeLegibility;
  font-variant-ligatures: common-ligatures;
  margin: 0;
  padding: 0;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
*, *::before, *::after {
  box-sizing: inherit;
}
:-webkit-any(article, aside, nav, section) h1 {
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}
</style>
