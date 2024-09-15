// Verificador de Acesso ao Sistema Bancário

// Entrada de dados com as informações do usuário
var ano_nasc = 2003
var conta_ativa = "SIM"
var restri_credito = "NAO"
var manutencao_sistema = "NAO"

// Cálculo para idade do usuário
var ano_atual = new Date().getFullYear()
var idade = ano_atual - ano_nasc

// Condicional para verificar acesso
if (manutencao_sistema === "SIM") {
    console.log("O sistema está em manutenção. Tente novamente mais tarde");
} else if (idade > 18 && conta_ativa === "SIM" && restri_credito === "NAO") {
    console.log("Acesso concedido.");
    }else{
        console.log(`Acesso negado.`)
}
console.log(`Agradecemos por utilizar nosso programa!`)
