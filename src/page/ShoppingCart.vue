<template>
    <div class="shopping-cart-page">
        <template v-if="cart.cartList.length > 0">
            <div class="cart-page-container">
                <div class="cart-page__left">
                    <div class="cart-items-container">
                        <div class="cart-item" v-for="item in cart.cartList" :key="`${item.hash}${item.size}`">

                            <router-link :to="{name: 'productItem', params: {hash: item.hash}}" class="cart-item__img-wrapper">
                                <div class="cart-item__img-inner">
                                    <img class="cart-item__img" :src="`/static/images/${item.image}`" alt="">
                                </div>
                            </router-link>
                            <div class="cart-item__right">
                                <h5 class="cart-item__title">{{ item.name }}</h5>
                                <p class="cart-item__desc">{{ item.size }} x {{ item.amount }}</p>
                                <p class="cart-item__desc">NT$ {{ item.price }}</p>
                            </div>
                            <button @click="deleteCart(item.hash, item.size)">delete</button>
                        </div>
                    </div>
                </div>
                <div class="cart-page__right">
                    
                    <p>total price: <span class="boldest">NT${{ cart.totalPrice }}</span></p>
                    <button class="btn-secondary">CHECKOUT</button>
                </div>
            </div>


        </template>
        <template v-else>
            <p>Nothing found in your cart here.</p>
            <router-link class="btn-secondary" :to="{name: 'productList'}">Find Your Loved Ones!</router-link>
        </template>

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

<style lang="scss" scoped>
@import "~@/assets/sass/_variables";
.cart-page-container {
  display: flex;
}

.cart-page__left {
  flex: 2;
  margin-right: 30px;
}
.cart-page__right {
  flex: 1;
}
.cart-items-container {
  height: 80vh;
  overflow-y: scroll;
}
.cart-item {
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
  &__img-wrapper {
    flex-basis: 100px;
    overflow: hidden;
    margin-right: 10px;
  }
  &__img-inner {
    padding-top: 100%;
    position: relative;
  }
  &__img {
    @include img-frame__img();
    max-width: 100%;
    max-height: 100%;
  }
  &__right {
    flex: 1;
  }
  &__title {
    margin: 0 0 10px;
  }
  &__desc {
    margin: 5px 0 0;
  }
}
</style>
