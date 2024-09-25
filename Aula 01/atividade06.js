// Último Dígito de um Número

var num = 6382
var num_inteiro = Math.abs(Math.floor(num))
var ultimo_num = num_inteiro % 10

console.log(`O último digíto do número ${num} é o número ${ultimo_num}.`)