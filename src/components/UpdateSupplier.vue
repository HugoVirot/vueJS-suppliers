     <template>
  <form>
    <!--formulaire modification fournisseur-->
    <div
      class="container pt-2 mb-3 w-50 btn justify-content-around"
      style="background-color: #41B883"
    >
      <h3 class="text-white">Modifier un fournisseur</h3>
      <label class="text-white" for="name">Nom : {{ supplier.name }} </label>
      <input v-model="name" placeholder="nouveau nom" class="form-control" type="text" id="name">
      <br>
      <label class="text-white" for="status">A du stock ? {{ supplier.status }} </label>
      <input v-model="status" placeholder="nouveau statut" class="form-control" type="text" id="status">
      <br>
      <label class="text-white" for="latitude">Latitude : {{ supplier.latitude }} </label>
      <input v-model="latitude" placeholder="nouvelle latitude" class="form-control" type="text" id="latitude">
      <br>
      <label class="text-white" for="longitude">Longitude : {{ supplier.longitude }} </label>
      <input v-model="longitude" placeholder="nouvelle longitude" class="form-control" type="text" id="longitude">
      <br>
       <router-link :to="'/suppliers/'">
      <button
        v-on:click="updateSupplier"
        style="color: #41B883"
        type="submit"
        class="btn btn-light mb-2"
        value="Submit"
      >Valider</button>
       </router-link>
    </div>
  </form>
</template>

<script>
const axios = require("axios");
//import Supplier from './Supplier.vue'
import SuppliersList from "./SuppliersList.vue";

export default {
  name: "UpdateSupplier",
  props: ["id", "name", "status", "checkedAt", "latitude", "longitude"],
  data() {
    return {
      supplier: []
    };
  },
  methods: {
    updateSupplier: function() {
      var object = {
        name: this.name,
        status: this.status,
        latitude: this.latitude,
        longitude: this.longitude,
        checkedAt: new Date()
      };
      console.log(this.id);
      console.log(object);
      axios
        .put("https://api-suppliers.herokuapp.com/api/suppliers/" + this.$route.params.id, object)
        .then(résultat => {
          alert("le fournisseur a bien été modifié");
          location.reload();
        })
        .catch(function(error) {
          //activation du message d'erreur (errored passe à true)
          object.errored = true;
        });
    }
  },
  created() {
    function getSupplier(object) {
        console.log(object.$route.params.id);
      axios
        .get(
          "https://api-suppliers.herokuapp.com/api/suppliers/" +
            object.$route.params.id
        )
        .then(function(response) {
          object.loading = false;
          object.supplier = response.data;
          console.log(object.supplier);
        })
        .catch(function(error) {
          //activation du message d'erreur (errored passe à true)
          object.errored = true;
        });
    }
    getSupplier(this);
  }
};
</script>