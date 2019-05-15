<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez-vous faire ?"/>
    <!--<button id="fournisseurs" v-on:click="onSuppliersListClick">Liste des fournisseurs</button>
    <button id="carte" v-on:click="onMapClick">Voir la carte</button>
    <Suppliers></Suppliers>
    <Map></Map>-->
    <router-link to="/suppliers">
      <button style="background-color: #41B883" class="btn btn-success mr-1 mb-2">fournisseurs</button>
    </router-link>
    <router-link to="/map">
      <button style="background-color: #41B883" class="btn btn-success mr-1 mb-2">carte</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld.vue";
import SuppliersList from "./components/SuppliersList.vue";
import SuppliersMap from "./components/SuppliersMap.vue";
import Supplier from "./components/Supplier.vue";

var clicked = false;

export default {
  name: "app",
  components: {
    HelloWorld
  },
  methods: {
    onSuppliersListClick: function() {
      alert("vous avez cliqué");
    },
    onMapClick: function() {
      alert("vous avez cliqué sur la carte");
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
