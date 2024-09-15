// Análise de Feedback de Clientes

var feedbacks = ['negativo', 'neutro', 'positivo', 'positivo', 'negativo', 'neutro', 'negativo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'positivo', 'neutro', 'negativo', 'positivo', 'negativo', 'negativo', 'neutro', 'neutro', 'positivo', 'neutro', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'neutro', 'positivo', 'negativo', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'positivo', 'negativo', 'negativo', 'neutro', 'negativo', 'neutro', 'neutro', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'negativo', 'negativo', 'negativo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'negativo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'neutro', 'negativo', 'negativo', 'positivo', 'neutro', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'neutro', 'neutro', 'negativo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'positivo', 'negativo', 'positivo', 'positivo', 'negativo', 'neutro', 'positivo', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'positivo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'negativo', 'negativo', 'negativo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'negativo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'neutro', 'negativo', 'negativo', 'positivo', 'neutro', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'neutro', 'neutro', 'negativo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'negativo', 'negativo', 'negativo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'negativo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'neutro', 'negativo', 'negativo', 'positivo', 'neutro', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'neutro', 'neutro', 'negativo', 'negativo', 'neutro']

// Contagem da quantidade de feedbacks
var total_feed = feedbacks.length

var cont_positivo = 0
var cont_negativo = 0
var cont_neutro = 0

// Contagem de feedbacks específicos (positivo, negativo, neutro)
for (var i = 0; i < total_feed; i++){
    if (feedbacks[i] === "positivo"){
        cont_positivo++
    } else if
        (feedbacks[i] === "negativo"){
            cont_negativo++
    } else if
        (feedbacks[i] === "neutro"){
            cont_neutro++
    }
}

// Cálculo dos percentuais dos feedbacks
var percentual_positivo = (cont_positivo / total_feed) * 100
var percentual_negativo = (cont_negativo / total_feed) * 100
var percentual_neutro = (cont_neutro / total_feed) * 100

// Saída dos resultados
console.log(`Análise de Feedback de Clientes`)
console.log(`====================================================`)
console.log(`Feedbacks positivos: ${cont_positivo}`)
console.log(`Feedbacks negativos: ${cont_negativo}`)
console.log(`Feedbacks neutros: ${cont_neutro}`)

console.log(`====================================================`)
console.log(`Percentual de feedbacks positivos: ${percentual_positivo.toFixed(2)}%`)
console.log(`Percentual de feedbacks negativos: ${percentual_negativo.toFixed(2)}%`)
console.log(`Percentual de feedbacks neutros: ${percentual_neutro.toFixed(2)}%`)
