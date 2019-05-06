<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez-vous faire ?"/>
    <button id="fournisseurs" v-on:click="onSuppliersListClick">Liste des fournisseurs</button>
    <button id="carte" v-on:click="onMapClick">Voir la carte</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    onSuppliersListClick: function () {
      alert("vous avez cliqué")
    },
    onMapClick: function () {
      alert("vous avez cliqué sur la carte")
    }

  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
