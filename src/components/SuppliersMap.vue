<template>

<gmap-map
  :center="{lat:45, lng:2}"
  :zoom="6"
  style="width: 100%; height: 800px"
>
<GmapMarker
    :key="index"
    v-for="(supplier, index) in suppliers"
    :position="supplier.position"
    :clickable="true"
    :draggable="true"
    @click="center=supplier.position"
  />

</gmap-map>

</template>


<script>

import { format, render, cancel, register } from 'timeago.js';
export default {
  name: 'SuppliersMap',
    data() {
    return{
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1",
          status: true,
          checkedAt: format(new Date()),
          position: {lat:45, lng:3},
          latitude: 45,
          longitude: 10
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: format(new Date()),
          position: {lat:43, lng:2}
        }
      ]
    }
  }
}
</script>
