const cart = {
    namespaced: true,
    state: {
        cart: [],
        totalPrice: 0,
    },
    mutations: {
        ['UPDATE_PRICE'](state, newPrice) {
            state.totalPrice = newPrice;
        },
        ['ADD_CART'](state, payload) {
            const targetCart = state.cart.find(ele => ele.hash == payload.hash);
            const isExist = state.cart.some(ele => ele.hash == payload.hash);
            if (isExist) {
                const index = state.cart.findIndex(ele => ele == targetCart);
                state.cart[index] = {
                    hash: payload.hash,
                    size: payload.size,
                    amount: targetCart.amount + payload.amount
                }
            } else {
                state.cart.push({
                    hash: payload.hash,
                    size: payload.size,
                    amount: payload.amount
                });
            }
            // state.cart.push(payload);
        }
    },
    actions: {
        addToCart({
            commit,
            dispatch
        }, payload) {
            commit('ADD_CART', payload);
            dispatch('calculatePrice');
        },
        calculatePrice({
            state,
            commit,
            rootState
        }) {
            const productList = rootState.product.productList;

            function getItemPrice(hash) {
                return productList.filter(ele => {
                    return ele.hash == hash;
                })[0].price;
            }
            const newPrice = state.cart.reduce((acc, curr) => {
                return acc + getItemPrice(curr.hash);
            }, 0);
            commit('UPDATE_PRICE', newPrice);
        }
    }
}

export default cart