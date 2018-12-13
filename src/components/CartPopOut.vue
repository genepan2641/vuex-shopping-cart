<template>
	<div class="cart-pop-out">
		<template v-if="cart.totalPrice > 0">
			<div class="cart-pop-out__items-wrapper">
				<cart-pop-out-item
					v-for="(item, index) in cart.cartList"
					:index="index"
					:key="`${item.hash}${item.size}`"
				></cart-pop-out-item>
				<p>
					total:
					<span class="boldest">NT${{ cart.totalPrice }}</span>
				</p>
			</div>
			<div class="cart-pop-out__btns-wrapper">
				<button class="btn-primary cart-pop-out__btn" @click="handleClickViewCart">View Cart</button>
				<!-- <router-link class="btn-primary cart-pop-out__btn" :to="{name: 'shoppingCart'}">View Cart</router-link> -->
				<button class="btn-secondary cart-pop-out__btn">Checkout</button>
			</div>
		</template>
		<template v-else>
			<h5 class="text-center">your cart is empty now</h5>
		</template>
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
	},
	methods: {
		handleClickViewCart() {
			this.$emit('click-view-cart');
			this.$router.replace({ name: 'shoppingCart' });
		}
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
