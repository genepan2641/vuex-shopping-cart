<template>
	<div class="cart-item">
		<div class="cart-item__img-wrapper">
			<div class="cart-item__img-inner">
				<img class="cart-item__img" :src="`/static/images/${cartItem.image}`" alt>
			</div>
		</div>
		<div class="cart-item__right">
			<h5 class="cart-item__title">{{ cartItem.name }}</h5>
			<p class="cart-item__desc">{{ cartItem.size }} x {{ cartItem.amount }}</p>
			<p class="cart-item__desc">NT$ {{ cartItem.price }}</p>
			<button
				@click="()=>showDeleteConfirm = true"
				class="cart-item__delete-btn btn-primary btn-small"
			>
				<i class="fas fa-times"></i>
			</button>

			<div v-if="showDeleteConfirm" class="delete-pop-out p10">
				<p class="m0 mB10">Are you sure to delete this item?</p>
				<button @click="deleteCart(cartItem.hash, cartItem.size)" class="btn-secondary">delete</button>
				<button @click="()=>showDeleteConfirm = false" class="btn-primary">cancel</button>
			</div>
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
	margin-bottom: 5px;
	&__img-wrapper {
		flex: 1 1 30px;
		margin-right: 10px;
	}
	&__img-inner {
		padding-top: 100%;
		position: relative;
		img {
			@include img-frame__img();
			max-width: 100%;
			max-height: 100%;
		}
	}

	&__right {
		flex: 2 1 150px;
		position: relative;
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

	&__delete-btn {
		position: absolute;
		top: 10px;
		right: 10px;
	}
}

.delete-pop-out {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	background-color: white;
	border: 1px solid black;
}
</style>
