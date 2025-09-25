# 🪙 CoinApp

Um aplicativo mobile de controle financeiro pessoal desenvolvido com Capacitor, HTML, CSS e JavaScript. O CoinApp permite que você gerencie suas finanças de forma simples e intuitiva, controlando receitas, despesas, categorias e gastos fixos.

## Sobre o App

O CoinApp é uma solução para controle financeiro pessoal, oferecendo uma interface moderna para gerenciar suas finanças no dia a dia. O aplicativo funciona offline, armazenando todos os dados localmente no dispositivo.

## Funcionalidades

### Dashboard Principal
- **Balanço Mensal**: Visualização do saldo atual
- **Interface Moderna**: Design responsivo com suporte a tema claro/escuro
- **Menu Lateral**: Navegação intuitiva entre as funcionalidades

### Controle Financeiro
- **Receitas**: Cadastro e controle de receitas mensais
- **Despesas**: Gerenciamento de gastos por categoria
- **Provisões**: Provisionamento de gastos futuros
- **Relatórios**: Visualização de gastos por categoria

### Categorização
- **Categorias**: Organize suas despesas por categorias personalizadas
- **Subcategorias**: Crie subcategorias para maior organização
- **Gastos Fixos**: Configure despesas recorrentes mensais que serão automaticamente provisionadas todos os meses

### Configurações
- **Tema**: Alternância entre modo claro e escuro
- **Dados**: Gerenciamento de informações pessoais

## Tecnologias Utilizadas

- **Capacitor**: Framework para desenvolvimento mobile híbrido
- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilização com variáveis CSS e animações
- **JavaScript ES6+**: Lógica da aplicação
- **jQuery**: Manipulação do DOM
- **LocalStorage**: Armazenamento local de dados

## Estrutura do Projeto

```
sistema/
├── index.html              # Página inicial com redirecionamento
├── login.html              # Tela de login/cadastro
├── home.html               # Dashboard principal
├── gastosFixos.html        # Gerenciamento de gastos fixos
├── categorias.html         # Gerenciamento de categorias
├── configuracoes.html      # Configurações do app
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   ├── main.js             # Funções principais e alertas
│   ├── functions.js        # Funções auxiliares
│   └── crud.js             # Operações CRUD
└── html/
    ├── controleFinanceiro.html  # Módulo de controle financeiro
    └── seletorData.html         # Seletor de período
```

## Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- Capacitor CLI
- Android Studio (para build Android)

### Instalação
1. Clone o repositório
2. Instale as dependências:
   npm install

3. Configure o Capacitor:
   npx cap add android

4. Sincronize os arquivos:
   npx cap sync

5. Execute no dispositivo/emulador:
   npx cap run android

## Build para Produção

### Android
npx cap build android

## Armazenamento de Dados

O CoinApp utiliza o LocalStorage do navegador para armazenar:
- Configurações do usuário
- Receitas e despesas
- Categorias e subcategorias
- Dados de controle financeiro

## Interface

- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Tema Escuro/Claro**: Alternância automática baseada na preferência
- **Animações Suaves**: Transições e animações para melhor UX
- **Ícones Modernos**: Interface visual atrativa e intuitiva

## Funcionalidades de Relatório

- **Balanço Mensal**: Cálculo automático do saldo
- **Gastos por Categoria**: Visualização de despesas organizadas
- **Receitas vs Despesas**: Comparativo mensal
- **Provisões**: Controle de gastos planejados

## Segurança

- **Dados Locais**: Informações armazenadas apenas no dispositivo
- **Validação**: Validação de dados de entrada

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Desenvolvedor
- Nome: Lucas Fabiano
- GitHub: https://github.com/lucasfssouzaa
- LinkedIn: linkedin.com/in/lucas-fabiano/



---
