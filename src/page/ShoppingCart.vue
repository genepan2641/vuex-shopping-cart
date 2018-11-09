<template>
    <div class="shopping-cart-page">
        shopp cart

        <div v-for="item in cart.cartList" :key="`${item.hash}${item.size}`">
            <img style="width: 200px;" :src="`/static/images/${item.image}`" alt="">
            <h3>{{ item.name }}</h3>
            <p>{{ item.size }} x {{ item.amount }}</p>
            <p>NT$ {{ item.price }}</p>
            <button @click="deleteCart(item.hash, item.size)">delete</button>
        </div>

        <p>total price: {{ cart.totalPrice }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['cart'])
    },
    methods: {
        deleteCart(hash, size) {
            this.$store.dispatch('cart/deleteCart', { hash, size });
        }
    }
}   
</script>

<style>
</style>
