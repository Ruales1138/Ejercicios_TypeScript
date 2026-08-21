// 3. Crear un array de números y calcular la suma total

let nums: number[] = [1,2,3,4,51]
let sum: number = 0

for (let num of nums) {
    sum += num
}

console.log('Suma: ' + sum)

// 5. Calcular el promedio de los números del punto 3

console.log('Promedio: ' + sum/nums.length)

// 6. Imprimir los números mayor a 50 del punto 3.

console.log('Mayores de 50:')
for (let num of nums) {
    if (num > 50) {
        console.log(num)
    }
}