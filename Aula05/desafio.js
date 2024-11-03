// Sistema de gerenciamento de eventos

const readline = require(`readline`)
const moment = require(`moment`)
require(`moment/locale/pt-br`) // Importa o local para portugues 

// Define como portugues
moment.locale(`pt-br`)

const interf = readline.createInterface ({
    input: process.stdin,
    output: process.stdout   
})

console.log(`  `)
console.log(`Bem vindo ao nosso sistema de agendamento!`)
console.log(`Para agendar, iremos precisar de algumas informações...`)
console.log(`  `)
console.log( `========================================================` )
console.log(`  `)

interf.question('Informe uma data (DD / MM / YYYY): ', (data) => {
    const dataFormatada = moment(data, 'DD/MM/YYYY')

    if (dataFormatada.isValid()) {
        const diaSemana = dataFormatada.format('dddd')
        const diasRestantes = dataFormatada.diff(moment(), 'days' )
        const dataMais30Dias = dataFormatada.clone().add(30, 'days').format('DD/MM/YYYY');
    
     console.log(`  `)
    console.log(`Data escolhida: ${dataFormatada.format('DD/MM/YYYY')} - Dia da semana: ${diaSemana}`)
    console.log(`  `)
    console.log(`Faltam ${diasRestantes} dias para essa data.`)
    console.log(`Data com mais 30 dias: ${dataMais30Dias}`);
    } else {
    console.log('Data inválida. Por favor, insira uma data no formato DD/MM/YYYY.');
}   

    console.log(`  `)
    console.log(`Agradecemos por utilizar nossos serviço!`)

    interf.close()
})
