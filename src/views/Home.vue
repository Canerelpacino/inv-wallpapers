<template>
  <div class="home">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <body style="background-color: #151515;">
    <div class="row section-intro"><div class="col-twelve"><h5>by caner#0251</h5><h1>Create your IF Wallpaper</h1><p class="lead"><span style="color: rgb(150, 149, 149);"></span></p></div></div>
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
