let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
console.log([...a, ...b]);
console.log([a, b].flatMap(a => a));