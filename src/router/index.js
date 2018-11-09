import Vue from 'vue'
import Router from 'vue-router'
import ProductListPage from '@/page/ProductList'
import ProductItemPage from '@/page/ProductItem'
import ShoppingCart from '@/page/ShoppingCart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/list',
        name: 'productList',
        component: ProductListPage
    }, {
        path: '/item/:hash',
        name: 'productItem',
        component: ProductItemPage
    }, {
        path: '/cart',
        name: 'shoppingCart',
        component: ShoppingCart
    }, {
        path: '*',
        redirect: '/list'
    }]
})