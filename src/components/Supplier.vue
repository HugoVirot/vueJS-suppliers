<template>
<div id="supplier" class=" container w-50 mt-2 border border-success">
<h3>Fournisseur : {{ name }}</h3>
<h3 v-if="status===true" class="text-success">A du stock ? OK</h3>
<h3 v-else class="text-danger">A du stock ? KO</h3>
<h5>Date dernier relevé stocks : {{ checkedAt}} </h5>
</div>
</template>

<script>
export default {
  name: 'Supplier',
  props: [
    'name',
    'status',
    'checkedAt'
  ],
}
</script>