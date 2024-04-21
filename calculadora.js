function calcular() {
    abrirModal()
   
    let valor_medio_reais = Number(valor_medio_reais_input.value)
    let qtd_sacas = Number(qtd_sacas_input.value)
    let qdt_anos = Number(previsao.value)
    let faturamento_ano = valor_medio_reais * qtd_sacas
    let faturamento_total = faturamento_ano

    let desvalorizacao_ano = faturamento_total * 0.3518
    let desvalorizacao_total = desvalorizacao_ano

    let faturamento_desvalorizado_ano = faturamento_total - desvalorizacao_total
    let faturamento_desvalorizado_total = faturamento_desvalorizado_ano

    resultado.innerHTML = `Produzindo ${qtd_sacas} sacas por ano, com o preço médio de ${valor_medio_reais} sem a ambientização necessária, você:<br><br>`

    for (ano = 1; ano <= qdt_anos; ano += 1) {
        resultado.innerHTML += `Deixa de faturar R$${faturamento_total.toFixed(2)}, para faturar apenas R$${faturamento_desvalorizado_total.toFixed(2)} em ${ano} ano(s) <br>
            Pois tem seu cefé desvalorizado em até R$${desvalorizacao_total.toFixed(2)} <br><br>`
        faturamento_total += faturamento_ano
        desvalorizacao_total += desvalorizacao_ano
        faturamento_desvalorizado_total += faturamento_desvalorizado_ano
    }
}

function fecharModal() {
    document.getElementById('modalOverlay').style.display = 'none'
}
function abrirModal() {
    document.getElementById('modalOverlay').style.display = 'flex'
}
