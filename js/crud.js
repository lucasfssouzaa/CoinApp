// CRUD Saldo Atual
function getSaldoAtual(){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    return controleFinanceiro.saldoAtual
}
    
function updSaldoAtual(saldoAtual){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.saldoAtual = saldoAtual
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

// CRUD Receitas
function updSaldoAtual(saldoAtual){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.saldoAtual = saldoAtual
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function getReceitas(mesView){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let receitas = controleFinanceiro.receitas
    let receitasFiltradas = receitas.filter(receita => receita.data === mesView)
    return receitasFiltradas
}

function getReceitaById(id){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let receita = controleFinanceiro.receitas.find(r => r.id === Number(id))
    return receita
}

function addReceita(receita){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.receitas.unshift(receita)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function updReceita(receita){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    
    //busca receita pelo id
    let receitaEncontrada = controleFinanceiro.receitas.find(r => r.id === Number(receita.id))
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
    controleFinanceiro.receitas = controleFinanceiro.receitas.filter(r => r.id !== Number(idDel))
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

// CRUD Provisões
function getProvisoes(mesView){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let provisoes = controleFinanceiro.provisoes
    let provisoesFiltradas = provisoes.filter(provisao => provisao.data === mesView)
    return provisoesFiltradas
}

function getProvisaoById(id){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let provisao = controleFinanceiro.provisoes.find(p => p.id === Number(id))
    return provisao
}

function addProvisao(provisao){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.provisoes.unshift(provisao)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))

    let nome = provisao.descricao
    let config = JSON.parse(localStorage.getItem('config'))
    if(!config.categoria.find(c => c.nome === nome)){
        config.categoria.push({nome: nome})
        localStorage.setItem('config', JSON.stringify(config))
    }
}

function updProvisao(provisao){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))

    let provisaoEncontrada = controleFinanceiro.provisoes.find(p => p.id === Number(provisao.id))
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
    controleFinanceiro.provisoes = controleFinanceiro.provisoes.filter(p => p.id !== Number(idDel))
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}



// CRUD Despesas
function getDespesas(mesView){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let despesas = controleFinanceiro.despesas
    let despesasFiltradas = despesas.filter(despesa => despesa.data === mesView)
    return despesasFiltradas
}

function getDespesaById(id, mes){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    let despesa = controleFinanceiro.despesas.find(d => d.id === Number(id) && d.data === mes)
    return despesa
}

function addDespesa(despesa){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.despesas.unshift(despesa)
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function updDespesa(despesa){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))

    let despesaEncontrada = controleFinanceiro.despesas.find(d => d.id === Number(despesa.id) && d.data === despesa.data)
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

function delDespesa(idDel, dataDel){
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))
    controleFinanceiro.despesas = controleFinanceiro.despesas.filter(d => {
        return !(d.id === Number(idDel) && d.data === dataDel)
    })
    localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
}

function getBalancoMensal(mesView, consideraSaldo){
    let receitas = JSON.parse(localStorage.getItem('controleFinanceiro')).receitas;
    receitas = receitas.filter(receita => receita.data == mesView);
    let despesas = JSON.parse(localStorage.getItem('controleFinanceiro')).despesas;
    despesas = despesas.filter(despesa => despesa.data == mesView);
    let provisoes = JSON.parse(localStorage.getItem('controleFinanceiro')).provisoes;
    provisoes = provisoes.filter(provisao => provisao.data == mesView);
    let saldoAtual = JSON.parse(localStorage.getItem('controleFinanceiro')).saldoAtual;
    saldoAtual = Number(saldoAtual);

    //gastos por categoria
    let gastosCategoria = {};
    despesas.forEach(d => {
        let categoria = d.categoria || 'Outros';
        let valor = Number(d.valor) || 0;
        gastosCategoria[categoria] = (gastosCategoria[categoria] || 0) + valor;
    });

    // Receitas a receber
    let aReceber = receitas
        .filter(r => r.recebido == null || r.recebido === false)
        .reduce((soma, r) => soma + Number(r.valor), 0);

    // Despesas a pagar
    let aPagar = despesas
        .filter(d => d.pago == null || d.pago === false)
        .reduce((soma, d) => soma + Number(d.valor), 0);

    // Provisões (total planejado – gasto na categoria, nunca negativo)
    let provisoesDisponiveis = provisoes.reduce((soma, p) => {
        let planejado = Number(p.valor) || 0;
        let gasto = gastosCategoria[p.descricao] || 0;
        let disponivel = Math.max(planejado - gasto, 0);
        return soma + disponivel;
    }, 0);

    // Balanço final
    if(consideraSaldo == 0){
        saldoAtual = 0;
    }
    let balancoMensal = saldoAtual + aReceber - aPagar - provisoesDisponiveis;
    return balancoMensal;
}
