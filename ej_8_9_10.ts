// 8. Crear un array de productos (nombre y precio) e imprimirlos

type Product = {
    name: string;
    price: number;
    amount: number;
};

let product_list: Product[] = [
    {name: 'AK47', price: 10000, amount: 12},
    {name: 'Enano en tanga', price: 500, amount: 2},
    {name: 'Buñuelo', price: 1, amount: 200}
]

console.log(product_list)

// 9. Encontrar el producto con mayor precio del array e imprimirlo

let more_expensive: number = 0
for (let product of product_list) {
    if (product.price > more_expensive) {
        more_expensive = product.price
        console.log('Producto mas caro: ' + product.name)
    }
}

// 10. Agregar la cantidad de unidades disponibles a cada producto y calcular el valor total de mi inventario.

let total_amount: number = 0
for (let product of product_list) {
    total_amount += product.price * product.amount
}
console.log('El total del inventario es: $' + total_amount)