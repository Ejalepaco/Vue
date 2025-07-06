<script setup>
const myId = "prueba";
const myText = ref("Some Value");
</script>

<template>
  <div class="container mt-3 text-center">
    <h1 v-bind:id="myId" id="some-id">v-bind Dinámico</h1>
    <!-- <h1 :id="myId" id="some-id">v-bind Dinámico</h1> También se hace sin v-bind es el método abreviado-->
    <input type="text" :value="myText" />
  </div>
</template>
