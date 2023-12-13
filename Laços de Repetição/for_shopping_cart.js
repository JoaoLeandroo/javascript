
const shopping_cart = [
    {"item": "Apple", "price": 0.5, "quantity": 10},
    {"item": "Milk", "price": 2.0, "quantity": 8},
    {"item": "Force", "price": 1.0, "quantity": 3},
    {"item": "Addidas", "price": 2.5, "quantity": 5}
]

let total = 0

for(let i=0; i < shopping_cart.length; i++) {
    total += shopping_cart[i].price * shopping_cart[i].quantity
}

console.log(`Valor total dos produtos: R$ ${total}`)