// Com o metodo toSorted o array original, não sofre alterações
const arr = [5, 8, 9, 4, 2, 3];
console.log(arr);
console.log("-------------------------");
const sorted = arr.toSorted();
console.log(sorted);

const teste = [22, 10, 9, 6, 23, 45, 3, 7, 12, 5, 9];
const a = teste.toSorted((a, b) => {
    return a - b
})
console.log(a)
console.log(teste)
