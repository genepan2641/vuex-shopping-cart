<template>
    <div class="cart-pop-out">
        <div class="cart-pop-out__items-wrapper">
            <div class="cart-item" v-for="item in cart.cartList" :key="`${item.hash}${item.size}`">
                <div class="cart-item__img-wrapper">
                    <div class="cart-item__img-inner">
                        <img class="cart-item__img" :src="`/static/images/${item.image}`" alt="">
                    </div>
                </div>
                <div class="cart-item__right">
                    <h5 class="cart-item__title">{{ item.name }}</h5>
                    <p class="cart-item__desc">{{ item.size }} x {{ item.amount }}</p>
                    <p class="cart-item__desc">NT$ {{ item.price }}</p>
                </div>
                <!-- <button @click="deleteCart(item.hash, item.size)">delete</button> -->
            </div>

            <p>total: <span class="boldest">NT${{ cart.totalPrice }}</span></p>
        </div>
        <div class="cart-pop-out__btns-wrapper">
            <router-link class="btn-primary cart-pop-out__btn" :to="{name: 'shoppingCart'}">View Cart</router-link>
            <button class="btn-secondary cart-pop-out__btn">Checkout</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/_variables.scss";
.cart-pop-out {
  width: 400px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  &__items-wrapper {
    max-height: 330px;
    overflow-y: scroll;
  }
  &__btns-wrapper {
    padding: 10px;
    display: flex;
  }
}

.cart-item {
  display: flex;
  margin-bottom: 5px;
  &__img-wrapper {
    flex: 1 1 30px;
    margin-right: 10px;
  }
  &__img-inner {
    padding-top: 100%;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__right {
    flex: 2 1 150px;
  }

  &__title {
    display: inline-block;
    height: 40px;
    margin: 0 0 10px;
  }
  &__desc {
    margin: 0 0 5px;
    font-size: $font-size-6;
  }
}

.cart-pop-out__btn {
  flex: 1;
  &:first-child {
    margin-right: 10px;
  }
}
</style>
