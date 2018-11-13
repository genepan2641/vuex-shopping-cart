<template>
    <div class="cart-pop-out">
        <div class="cart-pop-out__items-wrapper">
          <cart-pop-out-item 
            v-for="(item, index) in cart.cartList" 
            :index="index"
            :key="`${item.hash}${item.size}`">
          </cart-pop-out-item>
            <!-- <div class="cart-item" v-for="item in cart.cartList" :key="`${item.hash}${item.size}`">
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
            </div> -->

            <p>total: <span class="boldest">NT${{ cart.totalPrice }}</span></p>
        </div>
        <div class="cart-pop-out__btns-wrapper">
            <router-link class="btn-primary cart-pop-out__btn" :to="{name: 'shoppingCart'}">View Cart</router-link>
            <button class="btn-secondary cart-pop-out__btn">Checkout</button>
        </div>
    </div>
</template>

<script>
import CartPopOutItem from '@/components/CartPopOutItem.vue';
import { mapState } from 'vuex';
export default {
  components: {
    CartPopOutItem
  },
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

.cart-pop-out__btn {
  flex: 1;
  &:first-child {
    margin-right: 10px;
  }
}
</style>
