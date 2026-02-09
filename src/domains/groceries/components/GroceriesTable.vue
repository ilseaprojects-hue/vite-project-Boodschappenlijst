<script setup>
import { ref, computed } from 'vue'
import router from '../../../router';
import { removeGrocery } from '../store.js'

const props = defineProps(['products'])

const total = computed(() =>
    props.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
)

const handleDelete = (id) => {
  removeGrocery(id)
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Prijs</th>
                <th>Hoeveelheid</th>
                <th>Subtotaal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.name }}</td>
                <td>€{{ product.price.toFixed(2) }}</td>
                <td>
                    <input type="number" v-model.number="product.quantity" min="0" />
                </td>
                <td>€{{ (product.price * product.quantity).toFixed(2) }}</td>
                <td><router-link :to="`/edit/${product.id}`">
                        <button>Edit</button>
                    </router-link></td>
                <td>
                    <button @click="handleDelete(product.id)">Verwijder</button>
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    <button @click="router.push('/create')">Nieuw product</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Totaal</td>
                <td>€{{ total.toFixed(2) }}</td>
            </tr>
        </tfoot>
    </table>
</template>


<style scoped></style>
