<template>
<div id="supplier" class=" container mt-2 border border-success">
<h3>Fournisseur : {{ name }}</h3>
<h3 v-if="status===true" class="text-success">A du stock ? OK</h3>
<h3 v-else class="text-danger">A du stock ? KO</h3>
<h5>Date dernier relevé stocks : {{ checkedAt}} </h5>
</div>
</template>

<script>
export default {
  name: 'Supplier',
  data: function(){
    return {
    name: 'Mon fournisseur',
    status: true, // est ce qu'il y a du stock
    checkedAt: new Date().toLocaleString() // date de la dernière mise à jour du stock
    }
  },
}
</script>