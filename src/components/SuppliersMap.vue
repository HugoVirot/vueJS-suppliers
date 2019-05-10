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
      suppliers: [],
      loading: false,
      error: null,
    }
  }
}
</script>
