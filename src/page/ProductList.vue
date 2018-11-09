<template>
    <div class="product-list-page">
        <div class="product-items-wrapper">
            <router-link 
                v-for="item in product.productList" 
                :key="item.hash"
                class="link-wrapper"
                :to="{name: 'productItem', params: {hash: item.hash}}">
                <product-item 
                    :name="item.name"
                    :price="item.price"
                    :image="item.image"
                    >
                </product-item>
            </router-link>
        </div>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapState } from 'vuex';
export default {
    components: {
        ProductItem
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['product']),
    }
}
</script>

<style lang="scss">
.product-items-wrapper {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.link-wrapper {
  flex: 1;
  margin: 5px;
}
</style>
