<template>
  <div class="mb-5">
    <gmap-map
      :center="{lat:userPosition.latitude, lng:userPosition.longitude}"
      :zoom="14"
      style="width: 80%; height: 800px; border: 5px solid #41B883; margin: auto"
    >
      <GmapMarker
        :key="index"
        v-for="(supplier, index) in suppliers"
        :position="{lat: parseFloat(supplier.latitude),lng: parseFloat(supplier.longitude)}"
        :clickable="true"
        :draggable="true"
        @click="center=supplier.position"
      />
    </gmap-map>
  </div>
</template>

<script>
const axios = require("axios");
import { format, render, cancel, register } from "timeago.js";
export default {
  name: "SuppliersMap",
  data() {
    return {
      suppliers: [],
      loading: false,
      error: null,
      userPosition: { latitude: 0, longitude: 0 }
    };
  },
  created() {
    this.$root.getSuppliers(this);
  },
  mounted() {   //méthode 1 : fonction fléchée, méthode 2 : fonction normale, self=this
    navigator.geolocation.getCurrentPosition((position)=> {
      this.userPosition = position.coords;
      console.log(this.userPosition);
    });
  }
};
</script>
