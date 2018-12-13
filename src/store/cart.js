import Vue from 'vue';
const cart = {
    namespaced: true,
    state: {
        cartList: [],
        totalPrice: 0,
    },
    getters: {
        // 總共幾件商品
        totalItems: (state) => {
            return state.cartList.reduce((prev, curr) => {
                return prev + curr.amount;
            }, 0)
        }
    },
    mutations: {
        ['UPDATE_PRICE'](state, newPrice) {
            state.totalPrice = newPrice;
        },
        ['ADD_CART'](state, payload) {
            state.cartList.push(payload);
        },
        ['UPDATE_CART'](state, payload) {
            // 把已經存在的 item 的 amount 改成新的數量
            Vue.set(state.cartList[payload.index], 'amount', payload.newAmount);
        },
        ['REMOVE_CART'](state, payload) {
            Vue.delete(state.cartList, payload.index);
        }
    },
    actions: {
        addToCart({
            state,
            rootState,
            commit,
            dispatch
        }, payload) {

            const isExist = state.cartList.some(ele => {
                return ele.hash == payload.hash &&
                    ele.size == payload.size
            });
            if (isExist) {
                const targetCart = state.cartList.find(ele => ele.hash == payload.hash &&
                    ele.size == payload.size);
                const index = state.cartList.findIndex(ele => ele == targetCart);
                commit('UPDATE_CART', {
                    index: index,
                    newAmount: targetCart.amount + payload.amount
                })
            } else {
                const productList = rootState.product.productList;
                const targetProductInfo = productList.find(ele => ele.hash == payload.hash);
                commit('ADD_CART', {
                    name: targetProductInfo.name,
                    image: targetProductInfo.image,
                    price: targetProductInfo.price,
                    hash: payload.hash,
                    size: payload.size,
                    amount: payload.amount
                });
            }
            dispatch('calculatePrice');
        },
        calculatePrice({
            state,
            commit,
            rootState
        }) {
            const productList = rootState.product.productList;

            function getItemPrice(hash) {
                return productList.find(ele => {
                    return ele.hash == hash;
                }).price;
            }
            const newPrice = state.cartList.reduce((acc, curr) => {
                return acc + getItemPrice(curr.hash) * curr.amount;
            }, 0);
            commit('UPDATE_PRICE', newPrice);
        },
        deleteCart({
            state,
            commit,
            dispatch
        }, payload) {
            const {
                hash,
                size
            } = payload;
            const index = state.cartList.findIndex(ele => {
                return ele.hash == hash && ele.size == size
            });
            commit('REMOVE_CART', {
                index
            });
            dispatch('calculatePrice');
        }
    }
}

export default cart