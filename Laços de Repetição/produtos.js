const shopping_productos = [
    {"item": "tenis 21", "price": 99.99, "quantity": 2},
    {"item": "bota xx", "price": 325.50, "quantity": 1},
    {"item": "camisa y", "price": 115.50, "quantity": 1},
    {"item": "buttons", "price": 10.2, "quantity": 8},
    {"item": "short x", "price": 44.5, "quantity": 2},
    {"item": "force 1", "price": 200.90, "quantity": 1},
    {"item": "milk", "price": 3.0, "quantity": 2},
    {"item": "apple", "price": 5.0, "quantity": 10},
    {"item": "banana", "price": 2.0, "quantity": 2},
    {"item": "cadeira", "price": 129.00, "quantity": 1},
    {"item": "whey", "price": 100.00, "quantity": 2},
    {"item": "suplemento", "price": 89.90, "quantity": 3},
    {"item": "creatina", "price": 45.0, "quantity": 1}
]

let totalProducts = 0

for(let item = 0; item < shopping_productos.length; item++) {
    totalProducts += shopping_productos[item].price * shopping_productos[item].quantity
    let valorTotalProduto = shopping_productos[item].price * shopping_productos[item].quantity

    console.log(`item: ${shopping_productos[item].item} | quantidade: ${shopping_productos[item].quantity} | value: ${shopping_productos[item].price} | total: ${valorTotalProduto}`)
}
console.log("----------------------------------------------")
console.log(`Valor total: ${totalProducts}`)