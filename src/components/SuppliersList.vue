
<template>
  <section v-if="errored">
    <!--message d'erreur si échec-->
    <p class="text-danger">Echec de la requête. Veuillez réessayer.</p>
  </section>

  <section v-else>
    <!--message de chargement en attendant-->
    <div v-if="loading">Chargement...</div>

    <div v-else>
      <!--affichage normal une fois le chargement terminé-->
      <div>
        <form method="post" action="SuppliersList.vue">
          <!--select avec options de filtrage-->
          <div style="background-color: #41B883" class="btn btn-success form-group">
            <label for="select1">Filtrer par :</label>
            <select v-model="selected" class="form-control" id="select1">
              <option value selected disabled hidden>Choisissez</option>
              <option :value="true">OK</option>
              <option :value="false">KO</option>
              <option value="*">*</option>
            </select>
          </div>
        </form>
        <button v-on:click="deleteSupplier" class="btn btn-danger mb-2">Supprimer un fournisseur</button>
        <form>
          <!--formulaire ajout fournisseur-->
          <div
            class="container pt-2 mb-3 w-50 btn justify-content-around"
            style="background-color: #41B883"
          >
            <h3 class="text-white">Ajouter un fournisseur</h3>
            <label class="text-white" for="name">Nom :</label>
            <input v-model="name" class="form-control" type="text" placeholder="Paul Dupont" id="name">
            <br>
            <label class="text-white" for="status">A du stock ?</label>
            <input v-model="status" class="form-control" type="text" placeholder="true/false" id="status">
            <br>
            <label class="text-white" for="latitude">Latitude :</label>
            <input v-model="latitude" class="form-control" type="text" placeholder="15.50" id="latitude">
            <br>
            <label class="text-white" for="longitude">Longitude :</label>
            <input v-model="longitude" class="form-control" type="text" placeholder="10.65" id="longitude">
            <br>
            <button
              v-on:click="addSupplier"
              style="color: #41B883"
              type="submit"
              class="btn btn-light mb-2"
              value="Submit"
            >Valider</button>
          </div>
        </form>
      </div>
      <ul>
        <!--si option de filtrage choisie = OK -->
        <li class="list-unstyled" v-for="supplier in filteredSuppliers()" :key="supplier.id">
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
      errored: false,
      selected: "",
      name: "",
      status: "",
      latitude: "",
      longitude: ""
      /*addedSupplier: {
      name: this.name.value,
      status: this.status.value,
      latitude: this.latitude.value,
      longitude: this.longitude.value
      }*/
    };
  },
  methods: {
    addSupplier: function() {
      var object = {
          name: this.name,
          status: this.status,
          latitude: this.latitude,
          longitude: this.longitude
        };
      axios.post("https://api-suppliers.herokuapp.com/api/suppliers", object);
    },
    deleteSupplier: function() {
      axios.delete("https://api-suppliers.herokuapp.com/api/suppliers/");
    },
    filteredSuppliers: function() {
      return this.suppliers.filter(supplier => {
        if (supplier.status == this.selected) {
          return true;
        } else if (this.selected == "*" || this.selected === "") {
          return true;
        }
        return false;
      });
    }
  },
  created() {
    this.$root.getSuppliers(this);
    //self = this;    //redéfinition du this en tant que self (sinon pas reconnu)
  }
};
</script>
