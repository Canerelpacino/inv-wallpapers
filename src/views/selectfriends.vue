<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
  <div class="row section-intro"><div class="col-twelve"><h5>by caner#0251</h5><h1>Create your IF Wallpaper</h1><p class="lead"><span style="color: rgb(150, 149, 149);"></span></p></div></div>
  <div class="container">
   <div class="row" style="margin-bottom: 20px;"><div class="col-md-3 col-6" style="margin-bottom: 20px;"><div style="width: 100%; padding-bottom: 0px;"><div role="status" class="spinner-border" style="display: none; position: absolute; top: 50%; left: 50%;"></div><img src="../assets/n1.png" v-on:click="bg" alt="hapebeasts" style="width: 100%; max-width: 300px; height: auto; display: block;"></div></div><div class="col-md-3 col-6" style="margin-bottom: 20px;"><div style="width: 100%; padding-bottom: 0px;"><div role="status" class="spinner-border" style="display: none; position: absolute; top: 50%; left: 50%;"></div><img src="../assets/n2.png" v-on:click="bg2" alt="hapebeasts" style="width: 100%; max-width: 300px; height: auto; display: block;"></div></div><div class="col-md-3 col-6" style="margin-bottom: 20px;"><div style="width: 100%; padding-bottom: 0px;"><div role="status" class="spinner-border" style="display: none; position: absolute; top: 50%; left: 50%;"></div><img src="../assets/n3.png" v-on:click="bg3" alt="hapebeasts" style="width: 100%; max-width: 300px; height: auto; display: block;"></div></div><div class="col-md-3 col-6" style="margin-bottom: 20px;"><div style="width: 100%; padding-bottom: 0px;"><div role="status" class="spinner-border" style="display: none; position: absolute; top: 50%; left: 50%;"></div><img src="../assets/n4.png" v-on:click="bg3" alt="hapebeasts" style="width: 100%; max-width: 300px; height: auto; display: block;"></div></div></div>
  </div>
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
  font-family: Arial;
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
  font-family: Arial;
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
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
div{
  display: block;
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: inherit;
}
element.style {
  margin-bottom: 20px;
}
@media screen and (max-width: 600px){
  .row {
    padding-left: 25px;
    padding-right: 25px;
  }}
@media screen and (max-width: 768px){
  .row {
    width: auto;
  }}
.row {
  max-width: 1140px;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
*, *::before, *::after {
  box-sizing: inherit;
}
@media screen and (max-width: 400px){
  [class*="col-"] {
    width: 100% !important;
    float: none !important;
    clear: both !important;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }}
.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
}
</style>
