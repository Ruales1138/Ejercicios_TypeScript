// 4. Crear un array de números (mínimo 15) y calcular la suma total

type Min_15 = [
    number, number, number, number, number, 
    number, number, number, number, number, 
    number, number, number, number, number, 
    ...number[]
]

let nums: Min_15 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let sum: number = 0

for (let num of nums) {
    sum += num
}

console.log(sum)