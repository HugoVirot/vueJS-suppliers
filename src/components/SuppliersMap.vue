<template>
<div class="mb-5">
<gmap-map
  :center="{lat:45, lng:2}"
  :zoom="6"
  style="width: 80%; height: 800px; border: 5px solid #41B883; margin: auto"
>
<GmapMarker
    :key="index"
    v-for="(supplier, index) in suppliers"
    :position = "{lat: parseFloat(supplier.latitude),lng: parseFloat(supplier.longitude)}"
    :clickable="true"
    :draggable="true"
    @click="center=supplier.position"
  />
</gmap-map>
</div>
</template>

<script>
const axios = require('axios');

import { format, render, cancel, register } from 'timeago.js';
export default {
  name: 'SuppliersMap',
    data() {
    return{
      suppliers: [],
      loading: false,
      error: null,
    }
  },
    created () {
    axios
      .get('https://api-suppliers.herokuapp.com/api/suppliers')
      .then(response => {this.suppliers = response.data})
      /*.catch(error => {console.log(error)
      this.errored = true})
      .finally(() => this.loading = false)*/
  }
}
</script>
