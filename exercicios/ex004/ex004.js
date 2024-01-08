const colors = require ('colors')
//Formatação representar dados em forma de dinheiro//
var n1 =2080.5
console.log('Imprimindo variaveis numericas representadas em dinheiro.' .bgGreen)
console.log(n1.toLocaleString('pr-Br', {style: 'currency', currency: 'EUR'}))
console.log(n1.toLocaleString('pr-Br', {style: 'currency', currency: 'USD'}))
console.log(n1.toLocaleString('pr-Br', {style: 'currency', currency: 'BRL'}))
console.log(n1.toLocaleString('pr-Br', {style: 'currency', currency: 'GBP'}))
