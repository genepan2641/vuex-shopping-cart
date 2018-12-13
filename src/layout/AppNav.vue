<template>
	<div class="app-nav">
		<div class="app-nav-container">
			<router-link class="app-nav__link" :to="{name: 'productList'}">Product List</router-link>

			<a class="app-nav__link cart-pop-out__trigger" @click.prevent="() => showCart = !showCart">
				<span class="link-badge" :class="{'link-badge--active' : totalItems>0}">{{ totalItems }}</span>
				My Cart
			</a>
			<div v-if="showCart" @click.prevent="() => showCart = !showCart" class="app-nav__cart-pop-mask"></div>
			<div v-if="showCart" class="app-nav__cart-pop-wrapper">
				<cart-pop-out @click-view-cart="() => showCart = !showCart"></cart-pop-out>
			</div>
			<!-- <router-link class="app-nav__link" :to="{name: 'shoppingCart'}">My Cart</router-link> -->
		</div>
	</div>
</template>

<script>
import CartPopOut from '@/components/CartPopOut.vue';
import { mapGetters } from 'vuex';
export default {
	components: {
		CartPopOut
	},
	computed: {
		...mapGetters({
			totalItems: 'cart/totalItems'
		})
	},
	data() {
		return {
			showCart: false
		}
	}
}
</script>

<style lang="scss">
.app-nav-container {
	max-width: 960px;
	margin: auto;
	display: flex;
	justify-content: space-between;
}
.app-nav {
	height: 65px;
	background-color: white;
	border-bottom: 1px solid #eee;
	&__link {
		flex-basis: 120px;
		text-align: center;
		display: inline-block;
		padding: 20px 10px;
		background: black;
		color: white;
		cursor: pointer;
	}
	&__cart-pop-mask {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		z-index: 900;
	}
	&__cart-pop-wrapper {
		position: absolute;
		top: 50px;
		right: 0;
		z-index: 1000;
	}
}
.link-badge {
	display: block;
	position: absolute;
	top: 2px;
	right: 5px;
	border-radius: 50%;
	background: black;
	border: 1px solid white;
	color: white;
	padding: 1px 5px;
	font-size: 1rem;
	transition: all 500ms ease-out;
	transform: translateY(-10px);
	opacity: 0;
	&--active {
		opacity: 1;
		transform: translateY(0px);
	}
}
.cart-pop-out__trigger {
	position: relative;
}
</style>
