<template>
    <div class="app-nav">
            <router-link class="app-nav__link" :to="{name: 'productList'}">Product List</router-link>

            <a class="app-nav__link cart-pop-out__trigger" @click.prevent="() => showCart = !showCart">My Cart</a>
                <div v-if="showCart" class="cart-pop-out__wrapper">
                    <cart-pop-out></cart-pop-out>
                </div>
            <!-- <router-link class="app-nav__link" :to="{name: 'shoppingCart'}">My Cart</router-link> -->
    </div>
</template>

<script>
import CartPopOut from '@/components/CartPopOut.vue';
export default {
    components: {
        CartPopOut
    },
    data() {
        return {
            showCart: false
        }
    }
}
</script>

<style lang="scss">
.app-nav {
  display: flex;
  height: 45px;
  background-color: white;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  &__link {
    flex-basis: 120px;
    display: inline-block;
    padding: 10px;
    background: #eee;
    cursor: pointer;
  }
}

.cart-pop-out__trigger {
  position: relative;
}
.cart-pop-out__wrapper {
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1000;
}
</style>
