import {
    productList
} from '@/fake';

const product = {
    namespaced: true,
    state: {
        productList
    },
    actions: {
        fetchProductDetail({
            state
        }, hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(state.productList.filter(item => {
                        return item.hash === hash;
                    })[0]);
                }, 100);
            })
        }
    }
}

export default product