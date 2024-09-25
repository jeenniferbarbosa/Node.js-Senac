// Cálculo de Juros Simples

var valor_brl = 120
var taxa_anual = 0.12
var tempo = 4

var juros_simples = valor_brl * taxa_anual * tempo

console.log(`O valor dos juros simples é: R$ ${juros_simples.toFixed(2)}`)