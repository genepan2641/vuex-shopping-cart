<template>
	<div class="shopping-cart-page">
		<template v-if="cart.cartList.length > 0">
			<div class="cart-page-container">
				<div class="cart-page__left-wrapper">
					<div class="cart-items-container">
						<cart-item
							v-for="(item, index) in cart.cartList"
							:index="index"
							:key="`${item.hash}${item.size}`"
						></cart-item>
						<!-- <div class="cart-item" v-for="item in cart.cartList" :key="`${item.hash}${item.size}`">

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
						</div>-->
					</div>
				</div>
				<div class="cart-page__right-wrapper">
					<div class="cart-page__right">
						<p>
							total price:
							<span class="boldest">NT${{ cart.totalPrice }}</span>
						</p>
						<button class="btn-secondary">CHECKOUT</button>
					</div>
				</div>
			</div>
		</template>
		<template v-else>
			<div class="text-center">
				<p class="text-center">Nothing found in your cart here.</p>
				<router-link class="btn-secondary" :to="{name: 'productList'}">Find Your Loved Ones!</router-link>
			</div>
		</template>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import CartItem from '@/components/CartItem.vue';
export default {
	components: {
		CartItem
	},
	computed: {
		...mapState(['cart'])
	},
	methods: {
	}
}   
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/_variables";
.cart-page-container {
	display: flex;
}

.cart-page__left-wrapper {
	flex: 2;
	margin-right: 30px;
}
.cart-page__right-wrapper {
	flex: 1;
}

.cart-page__right {
	padding: 0px 20px 10px;
	border: 1px solid #eee;

	button {
		width: 100%;
	}
}

.cart-items-container {
	height: 80vh;
	overflow-y: scroll;
}
</style>
