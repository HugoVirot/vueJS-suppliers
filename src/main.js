import Vue from 'vue'
import App from './App.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAo2Mee8B75RkEXftEAeYVwQByvQ2CXK08',
  }
})

Vue.config.productionTip = false

const routes = [
   { path: '/suppliers', component: SuppliersList},
   { path: '/map', component: SuppliersMap},
   { path: '/supplier', component: Supplier},

 ]

 const axios = require("axios");
 const router = new VueRouter({
  routes //'./router/index.js', //raccourci de routes: routes
  //mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
  methods : {
    getSuppliers: function(object) {
      axios
        .get("https://api-suppliers.herokuapp.com/api/suppliers")
        .then(response => {
          setTimeout(function() {
            //ajout d'un timeout (1s) pour voir le mot "chargement"
            object.loading = false; //loading devient "false" à la fin du chargement
            object.suppliers = response.data;
          }, 1000);
        })
        .catch(error => {
          //activation du message d'erreur (errored passe à true)
          object.errored = true;
        });
    },
   /* addSupplier: function(addedSupplier) {
      axios.post(addedSupplier).then(response = )

    }*/
  }

}).$mount('#app')


  

