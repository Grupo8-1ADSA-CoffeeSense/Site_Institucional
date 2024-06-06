function calcular() {
    abrirModal()

    let valor_medio_reais_transformar = valor_medio_reais_input.value.replaceAll(".", "").replaceAll(",", ".")
    let valor_medio_reais = Number(valor_medio_reais_transformar)
   
    let qtd_sacas = Number(qtd_sacas_input.value)
    let qdt_anos = Number(previsao.value)

    let faturamento_ano = qtd_sacas * valor_medio_reais
    let faturamento_total = faturamento_ano

    let desvalorizacao_ano = faturamento_total * 0.46
    let desvalorizacao_total = desvalorizacao_ano

    let faturamento_desvalorizado_ano = faturamento_total - desvalorizacao_total
    let faturamento_desvalorizado_total = faturamento_desvalorizado_ano

    resultado.innerHTML = `Produzindo ${qtd_sacas} sacas por ano, com o preço médio de <b>${valor_medio_reais.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</b> sem a ambientização necessária, você:<br><br>`

    for (let ano = 1; ano <= qdt_anos; ano += 1) {
        
        resultado.innerHTML += `Deixa de faturar <b>${faturamento_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</b>, para faturar apenas <b>${faturamento_desvalorizado_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</b> em <b>${ano}<b> ano(s) <br> Pois tem seu café desvalorizado em até <b>${desvalorizacao_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</b><br><br><br>`
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