<script setup>
const groceries = ref([0, 0, 0, 0, 0])
</script>

<template>
  <div class="Boodschappen">
    <table>
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Aantal</th>
        <th>Subtotaal</th>
      </tr>

      <tr>
        <td>Brood</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>Brocoli</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>Krentenbol</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>Noten</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <tfoot colspan="3">Totaal</tfoot>
        <tfoot></tfoot>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
