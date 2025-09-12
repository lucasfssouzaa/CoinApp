// CRUD Receitas
function getReceitas(mesView){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let receitas = controleFinanceiro.receitas
    let receitasFiltradas = receitas.filter(receita => receita.data === mesView)
    return receitasFiltradas
}

function addReceita(receita){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.receitas.push(receita)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function updReceita(receita){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    
    //busca receita pelo id
    let receitaEncontrada = controleFinanceiro.receitas.find(r => r.id === receita.id)
    if (receita.descricao !== undefined) {
        receitaEncontrada.descricao = receita.descricao
    }
    if (receita.valor !== undefined) {
        receitaEncontrada.valor = receita.valor
    }
    if (receita.recebido !== undefined) {
        receitaEncontrada.recebido = receita.recebido
    }
    if (receita.fixo !== undefined) {
        receitaEncontrada.fixo = receita.fixo
    }

    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function delReceita(idDel){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.receitas = controleFinanceiro.receitas.filter(r => r.id !== idDel)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

// CRUD Provisões
function getProvisoes(mesView){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let provisoes = controleFinanceiro.provisoes
    let provisoesFiltradas = provisoes.filter(provisao => provisao.data === mesView)
    return provisoesFiltradas
}

function addProvisao(provisao){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.provisoes.push(provisao)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function updProvisao(provisao){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))

    let provisaoEncontrada = controleFinanceiro.provisoes.find(p => p.id === provisao.id)
    if (provisaoEncontrada) {
        if (provisao.descricao !== undefined) {
            provisaoEncontrada.descricao = provisao.descricao
        }
        if (provisao.valor !== undefined) {
            provisaoEncontrada.valor = provisao.valor
        }
        if (provisao.fixo !== undefined) {
            provisaoEncontrada.fixo = provisao.fixo
        }

        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }
}

function delProvisao(idDel){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.provisoes = controleFinanceiro.provisoes.filter(p => p.id !== idDel)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}



// CRUD Despesas
function getDespesas(mesView){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let despesas = controleFinanceiro.despesas
    let despesasFiltradas = despesas.filter(despesa => despesa.data === mesView)
    return despesasFiltradas
}

function addDespesa(despesa){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.despesas.push(despesa)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function updDespesa(despesa){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))

    let despesaEncontrada = controleFinanceiro.despesas.find(d => d.id === despesa.id)
    if (despesaEncontrada) {
        if (despesa.descricao !== undefined) {
            despesaEncontrada.descricao = despesa.descricao
        }
        if (despesa.valor !== undefined) {
            despesaEncontrada.valor = despesa.valor
        }
        if (despesa.categoria !== undefined) {
            despesaEncontrada.categoria = despesa.categoria
        }
        if (despesa.subcategoria !== undefined) {
            despesaEncontrada.subcategoria = despesa.subcategoria
        }
        if (despesa.pago !== undefined) {
            despesaEncontrada.pago = despesa.pago
        }

        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }
}

function delDespesa(idDel){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.despesas = controleFinanceiro.despesas.filter(d => d.id !== idDel)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}
