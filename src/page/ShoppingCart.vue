<template>
    <div class="shopping-cart-page">
        shopp cart

        <div v-for="item in cart.cartList" :key="item.hash">
            <img style="width: 200px;" :src="`/static/images/${item.image}`" alt="">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.hash }}</h4>
            <p>{{ item.size }} x {{ item.amount }}</p>

            <button @click="deleteCart(item.hash)">delete</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['cart'])
    },
    methods: {
        deleteCart(hash) {

        }
    }
}   
</script>

<style>
</style>
