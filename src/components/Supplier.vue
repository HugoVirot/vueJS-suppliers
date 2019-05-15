<template>
  <div id="supplier" style="border-radius: 20px" class="container mt-2 border border-success">
    <h3>Fournisseur : {{ name }}</h3>
    <h3 v-if="status===true" class="text-success">A du stock ? OK</h3>
    <h3 v-else class="text-danger">A du stock ? KO</h3>
    <h5>Date dernier relevé stocks : {{ checkedAt }}</h5>
    <router-link :to="'/updatesupplier/' + this.id">
      <button v-on:click="sendData" class="btn btn-secondary mb-2 mr-2">Modifier</button>
    </router-link>
    <button v-on:click="deleteSupplier" class="btn btn-danger mb-2">Supprimer</button>
  </div>
</template>

<script>

const axios = require("axios");
import UpdateSupplier from './UpdateSupplier.vue'

export default {
  name: "Supplier",
  props: ["id", "name", "status", "checkedAt", "latitude", "longitude"],
  methods: {
    deleteSupplier: function() {
      axios
        .delete("https://api-suppliers.herokuapp.com/api/suppliers/" + this.id)
        .then(résultat => {
          alert("le fournisseur a bien été supprimé");
          location.reload();
        });
    },
    updateSupplier: function() {
      var object = {
        name: this.name,
        status: this.status,
        latitude: this.latitude,
        longitude: this.longitude,
        checkedAt: new Date()
      };
      axios
        .put("https://api-suppliers.herokuapp.com/api/suppliers/" + this.id)
        .then(résultat => {
          alert("le fournisseur a bien été modifié");
          location.reload();
        });
    },
    sendData: function() {
      UpdateSupplier.name = this.name;
      UpdateSupplier.checkedAt = this.checkedAt;
      UpdateSupplier.latitude = this.latitude;
      UpdateSupplier.longitude = this.longitude;
      UpdateSupplier.id = this.id;
    }
  }
};
</script>