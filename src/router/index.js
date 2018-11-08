import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/page/ProductList'
import ProductItem from '@/page/ProductItem'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/list',
        name: 'productList',
        component: ProductList
    }, {
        path: '/item',
        name: 'productItem',
        component: ProductItem
    }]
})