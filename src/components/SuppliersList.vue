
<template>

    <section v-if="errored">
        <p class="text-danger">Echec de la requête. Veuillez réessayer.</p>
    </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>

    <div v-else>
    <ul>
      <li class="list-unstyled" v-for="supplier in suppliers" :key="supplier.id">
        <Supplier :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt"/>
      </li>
    </ul>
    </div>
  </section>

</template>

<script>
const axios = require('axios');

import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from 'timeago.js';
import SuppliersMap from "./SuppliersMap.vue";

export default {
  name: "SuppliersList",
  components: {
    Supplier,
  },
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
      .catch(error => {console.log(error)
      this.errored = true})
      .finally(() => this.loading = false)
  }
};
</script>
