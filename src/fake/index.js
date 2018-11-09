function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export let productList = [{
        hash: makeid(),
        name: 'The North Face 1996 Retro Nuptse Vest in Black',
        sizes: {
            S: 1,
            M: 2,
            L: 2
        },
        price: 8200,
        image: 'product_c.jpeg'
    },
    {
        hash: makeid(),
        name: 'Puffer coat in purple',
        sizes: {
            S: 3,
            M: 2,
            L: 4
        },
        price: 2400,
        image: 'product_a.jpeg'
    },
    {
        hash: makeid(),
        name: 'Puffer coat in green',
        sizes: {
            S: 5,
            M: 1,
            L: 2
        },
        price: 3500,
        image: 'product_c.jpeg'
    },
    {
        hash: makeid(),
        name: 'Puffer coat in black with hood',
        sizes: {
            S: 1,
            M: 2,
            L: 3
        },
        price: 2780,
        image: 'product_d.jpeg'
    },
];