
<template>
  <ul>
    <li class="list-unstyled" v-for="supplier in suppliers" :key="supplier.id">
      
      <Supplier :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt"/>
    </li>
  </ul>
</template>

<script>
import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from 'timeago.js';

export default {
  name: "SuppliersList",
  components: {
    Supplier,
  },
  data() {
    return{
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1",
          status: true,
          checkedAt: format(new Date())
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: format(new Date())
        }
      ]
    }
  }
};
</script>
