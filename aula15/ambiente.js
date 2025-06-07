let num = [5, 8, 2, 9, 3]


num.sort()
num.push(11) // Se num.push estiver acima de num.sort(), o vetor será ordenado e depois o número será adicionado
console.log(`Vetor: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)