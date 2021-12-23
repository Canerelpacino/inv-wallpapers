<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body>
  <img alt="friends1" src="../assets/friends.png" width="350" height="250">
  <img id="w2" src="../assets/b1.png" width="221.484" height="480">
  <div>
    <input value="Jetzt" type="button" id="button" class="bn" v-on:click="showresult">
  </div>
  </body>
</template>

<script>
export default {
  name: 'result',
  methods: {
    showme: function () {

    }
  }
}
</script>

<style scoped>
.bn{
  background-color: #BEBEBE;
  border: none;
  padding: 20px 45px;
  text-align: center;
  font-size: 20px;
  display: inline-block;
  font-family: Candara;
  position: absolute;
  top: 107%;
  left: 34%;
}
</style>
