
<template>
  <section v-if="errored">
    <p class="text-danger">Echec de la requête. Veuillez réessayer.</p>
  </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>

    <div v-else>
      <ul>
        <li class="list-unstyled" v-for="supplier in suppliers" :key="supplier.id">
          <Supplier
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from "timeago.js";
import SuppliersMap from "./SuppliersMap.vue";

const axios = require("axios");

export default {
  name: "SuppliersList",
  components: {
    Supplier
  },
  data() {
    return {
      suppliers: [],
      loading: true,
      errored: false
    };
  },
  created() {
    self = this;    //redéfinition du this en tant que self (sinon pas reconnu)
    axios
      .get("https://api-suppliers.herokuapp.com/api/suppliers")
      .then(response => {
        setTimeout(function() {      //ajout d'un timeout (2s) pour voir le mot "chargement"
          self.loading = false;      //loading devient "false" à la fin du chargement
          self.suppliers = response.data;
        }, 2000);                           
      })
      .catch(error => {             //activation du message d'erreur (errored passe à true)
        this.errored = true;       
      });
  }
};
</script>
