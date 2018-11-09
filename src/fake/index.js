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
            S: 9,
            M: 7,
            L: 14
        },
        price: 8200,
        image: 'product_c.jpeg'
    },
    {
        hash: makeid(),
        name: 'Puffer coat in purple',
        sizes: {
            S: 10,
            M: 10,
            L: 10
        },
        price: 2400,
        image: 'product_a.jpeg'
    },
    {
        hash: makeid(),
        name: 'Puffer coat in green',
        sizes: {
            S: 10,
            M: 5,
            L: 10
        },
        price: 3500,
        image: 'product_b.jpeg'
    },
    {
        hash: makeid(),
        name: 'Puffer coat in black with hood',
        sizes: {
            S: 5,
            M: 4,
            L: 8
        },
        price: 2780,
        image: 'product_d.jpeg'
    },
];