<template>
	<div class="cart-item">
		<router-link
			:to="{name: 'productItem', params: {hash: cartItem.hash}}"
			class="cart-item__img-wrapper"
		>
			<div class="cart-item__img-inner">
				<img class="cart-item__img" :src="`static/images/${cartItem.image}`" alt>
			</div>
		</router-link>
		<div class="cart-item__right">
			<h5 class="cart-item__title">{{ cartItem.name }}</h5>
			<p class="cart-item__desc">{{ cartItem.size }} x {{ cartItem.amount }}</p>
			<p class="cart-item__desc">NT$ {{ cartItem.price }}</p>
		</div>

		<div v-if="showDeleteConfirm">
			<p>Are you sure to delete this item?</p>
			<button @click="deleteCart(cartItem.hash, cartItem.size)" class="btn-secondary">yes</button>
			<button @click="()=>showDeleteConfirm =false" class="btn-primary">cancel</button>
		</div>

		<div v-else>
			<button @click="()=>showDeleteConfirm=true" class="btn-primary">
				<i class="fas fa-trash-alt"></i>
			</button>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	props: {
		index: { type: Number }
	},
	data() {
		return {
			showDeleteConfirm: false,
		}
	},
	computed: {
		...mapState(['cart']),
		cartItem() {
			return this.cart.cartList[this.index];
		}
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
.cart-item {
	display: flex;
	margin-bottom: 20px;
	padding-bottom: 20px;
	padding-right: 10px;
	border-bottom: 1px solid #eee;
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
