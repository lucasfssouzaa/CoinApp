function formatNumber(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valor);
}

function getCategorias(){
    let config = JSON.parse(localStorage.getItem('config'))
    return config.categoria
}

function getSubcategorias(){
    let config = JSON.parse(localStorage.getItem('config'))
    return config.subcategoria
}

function mesCadastrado(mesView){
    let config = JSON.parse(localStorage.getItem('config'))
    if(config.mesesCad.includes(mesView)){
        return true
    }
    return false
}

function addFixos(mesView){
    let config = JSON.parse(localStorage.getItem('config'))
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro'))

    let receitas = config.receita
    let despesas = config.despesa

    for(let i = 0; i < receitas.length; i++){
        let receita = {
            data: mesView,
            id: getId('receitas'),
            descricao: receitas[i].descricao,
            valor: receitas[i].valor,
            recebido: false,
            fixo: true
        }
        controleFinanceiro.receitas.push(receita)
        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }

    for(let i = 0; i < despesas.length; i++){
        let provisao = {
            data: mesView,
            id: getId('provisoes'),
            descricao: despesas[i].descricao,
            valor: despesas[i].valor,
            fixo: true
        }
        controleFinanceiro.provisoes.push(provisao)
        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }

    //inclui o mesView no array mesesCad
    config.mesesCad.push(mesView)
    console.log('mes incluido: ', mesView)
    localStorage.setItem('config', JSON.stringify(config))
}

function getId(table) {
    let idRef = JSON.parse(localStorage.getItem('idRef'))
    let id = idRef[table]
    if (!idRef[table]) {
        console.log('tabela nao existe:', table)
    } else {
        idRef[table] = idRef[table] + 1
        localStorage.setItem('idRef', JSON.stringify(idRef))
    }
    return id
}

// atualiza Receita / Provisoes fixos
function receitasUpd(nomeAnterior, nomeNovo, valorNovo, atualizaMesAtual){
    const config = JSON.parse(localStorage.getItem('config') || '{}')
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

    if (!config.mesesCad || !Array.isArray(config.mesesCad)) return
    if (!controleFinanceiro.receitas) return

    let mudou = false

    for(let i = 0; i < config.mesesCad.length; i++){
        const mesCad = config.mesesCad[i]
        controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

        if(mesCad > mesAtual || (mesCad == mesAtual && atualizaMesAtual)){
            for(let j = 0; j < controleFinanceiro.receitas.length; j++){
                let receita = controleFinanceiro.receitas[j]
                if(receita.data == mesCad && receita.descricao == nomeAnterior && receita.fixo === true){
                    receita.descricao = nomeNovo
                    receita.valor = valorNovo
                    mudou = true
                }
            }
            if (mudou) {
                localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
            }
        }
    }
}

function provisaoesUpd(nomeAnterior, nomeNovo, valorNovo, atualizaMesAtual){
    const config = JSON.parse(localStorage.getItem('config') || '{}')
    let controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

    if (!config.mesesCad || !Array.isArray(config.mesesCad)) return
    if (!controleFinanceiro.provisoes) return

    let mudou = false

    for(let i = 0; i < config.mesesCad.length; i++){
        const mesCad = config.mesesCad[i]
        controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

        if(mesCad > mesAtual || (mesCad == mesAtual && atualizaMesAtual)){
            for(let j = 0; j < controleFinanceiro.provisoes.length; j++){
                let provisao = controleFinanceiro.provisoes[j]
                if(provisao.data == mesCad && provisao.descricao == nomeAnterior && provisao.fixo == true){
                    provisao.descricao = nomeNovo
                    provisao.valor = valorNovo
                    mudou = true
                }
            }
            if (mudou) {
                localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
            }
        }
    }
}

// deleta Receita / Provisoes fixos
function receitasDel(nomeAnterior, atualizaMesAtual){
    const config = JSON.parse(localStorage.getItem('config') || '{}')
    const controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

    if (!config.mesesCad || !Array.isArray(config.mesesCad)) return
    if (!controleFinanceiro.receitas) return

    let mudou = false

    for(let i = 0; i < config.mesesCad.length; i++){
        const mesCad = config.mesesCad[i]

        if(mesCad > mesAtual || (mesCad == mesAtual && atualizaMesAtual)){
            // filtra removendo apenas as receitas fixas com o nome indicado
            const antes = controleFinanceiro.receitas.length
            controleFinanceiro.receitas = controleFinanceiro.receitas.filter(receita =>
                !(receita.data == mesCad && receita.descricao == nomeAnterior && receita.fixo === true)
            )
            if (controleFinanceiro.receitas.length < antes) {
                mudou = true
            }
        }
    }

    if (mudou) {
        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }
}

function provisaoesDel(nomeAnterior, atualizaMesAtual){
    const config = JSON.parse(localStorage.getItem('config') || '{}')
    const controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

    if (!config.mesesCad || !Array.isArray(config.mesesCad)) return
    if (!controleFinanceiro.provisoes) return

    let mudou = false

    for(let i = 0; i < config.mesesCad.length; i++){
        const mesCad = config.mesesCad[i]

        if(mesCad > mesAtual || (mesCad == mesAtual && atualizaMesAtual)){
            // filtra removendo apenas as provisoes fixas com o nome indicado
            const antes = controleFinanceiro.provisoes.length
            controleFinanceiro.provisoes = controleFinanceiro.provisoes.filter(provisao =>
                !(provisao.data == mesCad && provisao.descricao == nomeAnterior && provisao.fixo === true)
            )
            if (controleFinanceiro.provisoes.length < antes) {
                mudou = true
            }
        }
    }

    if (mudou) {
        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }
}

// Cria Receita / Provisoes fixos
function receitasCreate(nome, valor, atualizaMesAtual){
    const config = JSON.parse(localStorage.getItem('config') || '{}')
    const controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

    if (!config.mesesCad || !Array.isArray(config.mesesCad)) return
    if (!controleFinanceiro.receitas) controleFinanceiro.receitas = []

    let mudou = false

    for(let i = 0; i < config.mesesCad.length; i++){
        const mesCad = config.mesesCad[i]

        if(mesCad > mesAtual || (mesCad == mesAtual && atualizaMesAtual)){
            // procura receita existente com mesmo nome e fixo = true
            let receitaExistente = controleFinanceiro.receitas.find(r =>
                r.data == mesCad && r.descricao == nome && r.fixo === true
            )

            if (receitaExistente) {
                // já existe → só atualiza o valor
                receitaExistente.valor = valor
                mudou = true
            } else {
                // não existe → cria nova
                controleFinanceiro.receitas.push({
                    data: mesCad,
                    id: getId('receitas'),
                    descricao: nome,
                    valor: valor,
                    recebido: false,
                    fixo: true
                })
                mudou = true
            }
        }
    }

    if (mudou) {
        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }
}

function provisoesCreate(nome, valor, atualizaMesAtual){
    const config = JSON.parse(localStorage.getItem('config') || '{}')
    const controleFinanceiro = JSON.parse(localStorage.getItem('controleFinanceiro') || '{}')

    if (!config.mesesCad || !Array.isArray(config.mesesCad)) return
    if (!controleFinanceiro.provisoes) controleFinanceiro.provisoes = []

    let mudou = false

    for(let i = 0; i < config.mesesCad.length; i++){
        const mesCad = config.mesesCad[i]

        if(mesCad > mesAtual || (mesCad == mesAtual && atualizaMesAtual)){
            // procura provisão existente com mesmo nome e fixo = true
            let provisaoExistente = controleFinanceiro.provisoes.find(p =>
                p.data == mesCad && p.descricao == nome && p.fixo === true
            )

            if (provisaoExistente) {
                // já existe → só atualiza o valor
                provisaoExistente.valor = valor
                mudou = true
            } else {
                // não existe → cria nova
                controleFinanceiro.provisoes.push({
                    data: mesCad,
                    id: getId('provisoes'),
                    descricao: nome,
                    valor: valor,
                    fixo: true
                })
                mudou = true
            }
        }
    }

    if (mudou) {
        localStorage.setItem('controleFinanceiro', JSON.stringify(controleFinanceiro))
    }
}

