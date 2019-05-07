
<template>

<Supplier :name="name" :status='status' :checkedAt="checkedAt"/>

</template>

<script>
import Supplier from './Supplier.vue'

export default {
  name: 'SuppliersList',
  components: {
    Supplier
  },
  data: function(){
    return {
    name: "fournisseur",
    status: true,
    checkedAt: new Date().toLocaleString()
    }
  },
}
</script>
