import Vue from 'vue'
import App from './App.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
   { path: '/suppliers', component: SuppliersList},
   { path: '/map', component: SuppliersMap},
   { path: '/supplier', component: Supplier},

 ]

 const router = new VueRouter({
  routes //'./router/index.js', //raccourci de routes: routes
  //mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
  }).$mount('#app')


  

