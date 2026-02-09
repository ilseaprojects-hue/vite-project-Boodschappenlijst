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
                <th colspan="3">Subtotaal</th>
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
                    <button class="delete-btn" @click="handleDelete(product.id)">Verwijder</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Totaal</td>
                <td>€{{ total.toFixed(2) }}</td>
                <td colspan="2"></td>
            </tr>
        </tfoot>
    </table>
    <div class="add-product">
        <button @click="router.push('/create')">Nieuw product</button>
    </div>
</template>


<style scoped>
.add-product {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.add-product button {
    background-color: #7556bd;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: white;
    cursor: pointer;
}

.add-product button:hover {
    background-color: #402b72;
}

.delete-btn {
    background-color: #ac3f53;
    color: white;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
}

.delete-btn:hover {
    background-color: #862532;
}
</style>
