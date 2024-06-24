/* eslint-disable no-unused-vars */
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.65 }
]

// ADDING TO ARRAY

const newCart = [...shoppingCart, { id: 4, product: "Coffe Mug", price: 7.99 }]

// REMOVING ELEMENT

shoppingCart.filter(item => item.id !== 1);

// UPDATING ALL ELEMENT IN ARRAY

shoppingCart.map(item => {
    return { ...item, product: item.product.toLowerCase() }
})

// UPDATE AN ELEMENT IN ARRAY

shoppingCart.map(item => {
    if (item.id === 3) {
        return { ...item, price: 9.99 }
    }
    return item;
})