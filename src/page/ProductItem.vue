<template>
    <div class="product-item-page">
        <template v-if="isLoadingDetail">
            <p>is loading product...</p>
        </template>
        <template v-else>
            <img style="width: 300px;" :src="`static/images/${productDetail.image}`" alt="">
            <p>{{ productDetail.name }}</p>
            <p>{{ productDetail.price }}</p>
            <select v-model="selectedSize" name="" id="">
                <option value="">choose your size</option>
                <option v-for="(size, sizeName) in productDetail.sizes" 
                    :value="sizeName"
                    :key="sizeName">
                    {{ sizeName }}
                </option>
            </select>

            <div>
                <button @click="substractAmount()">-</button>
                <input v-model="selectedAmount" type="text" readonly>
                <button @click="addAmount()">+</button>
            </div>


            <button :disabled="!allowCheckout" @click="addToCart">ADD TO CART</button>
            <p v-if="selectedSize">
                <template v-if="availableAmount">
                    size: {{ selectedSize }} {{ availableAmount }} left
                </template>
                <template v-else>
                    size: {{ selectedSize }} is not available now
                </template>
            </p>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            isLoadingDetail: false,
            productDetail: {},
            selectedSize: '',
            selectedAmount: 1
        }
    },
    created() {
        this.fetchProductDetail();
    },
    computed: {
        ...mapState(['cart']),
        // 購物車對應 size 的數量
        sizeAmountInCart() {
            const targetCart = this.cart.cartList.find(ele => {
                return ele.hash == this.$route.params.hash &&
                    ele.size == this.selectedSize
            });
            return targetCart ? targetCart.amount : 0;
        },
        // 剩餘可選數量
        availableAmount() {
            return this.productDetail.sizes[this.selectedSize] - this.sizeAmountInCart;
        },
        allowCheckout() {
            return this.selectedSize != '' &&
                this.selectedAmount > 0 &&
                this.selectedAmount <= this.availableAmount
        }
    },
    watch: {
        // 改變尺寸時要重置數量
        selectedSize(val) {
            this.selectedAmount = 1;
        }
    },
    methods: {
        fetchProductDetail() {
            this.isLoadingDetail = true;
            this.$store.dispatch('product/fetchProductDetail', this.$route.params.hash).then(res => {
                this.isLoadingDetail = false;
                // let {hash, name, price, sizes} = res;
                this.productDetail = res;
            });
        },
        substractAmount() {
            if (this.selectedAmount >= 2) {
                this.selectedAmount--;
            }
        },
        addAmount() {
            // 可選數量
            // let availableAmount = this.productDetail.sizes[this.selectedSize];
            if (this.selectedAmount < this.availableAmount) {
                this.selectedAmount++;
            }
        },
        addToCart() {
            this.$store.dispatch('cart/addToCart', {
                hash: this.$route.params.hash,
                size: this.selectedSize,
                amount: this.selectedAmount
            });
            this.selectedAmount = 1;
        }
    }
}
</script>

<style>
</style>
