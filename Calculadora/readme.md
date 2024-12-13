### 1. Calculadora JS

## Funcionalidades ⚙️

- **Operações básicas**: soma, subtração, multiplicação, divisão.
- **Funções adicionais**: cálculo de potência e raiz.
- **Tratamento de erros**:
    - Erro ao tentar dividir por zero.
    - Mensagens claras para o usuário.
- **Interatividade**:
    - Permite realizar múltiplas operações consecutivas sem precisar reiniciar o programa.

## 🛠️ Como Configurar e Executar o Projeto
### Pré-requisitos

Antes de rodar o projeto, você precisa ter o Node.js instalado em sua máquina. O guia de instalação se encontra logo abaixo

- [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
## Guia de Instalação do Node.js 🌐

### 1. Baixar o Instalador

Acesse o site oficial do Node.js e baixe a versão mais recente do Node.js.

- **LTS (Long Term Support)**: Versão estável e recomendada para a maioria dos usuários.
- **Current**: Versão com os recursos mais recentes, mas pode ser instável.

### 2. Instalar o Node.js

Após o download, execute o instalador correspondente ao seu sistema operacional.

- **No Windows**: Execute o arquivo `.msi` e siga as instruções para concluir a instalação.
- **No macOS**: Execute o arquivo `.pkg` e siga as instruções.
- **No Linux**: Dependendo da distribuição, use o gerenciador de pacotes da sua distribuição.

### No Linux

Os comandos para instalação geralmente são:

Ubuntu/Debian:

```bash
sudo apt update
sudo apt install nodejs npm

```

### 3. Verificar a Instalação ✔️

Após a instalação, verifique se o Node.js foi instalado corretamente rodando os seguintes comandos:

- **Versão do Node.js**:
```bash
node -v

```
- **Versão do NPM**:
```bash
npm -v

```


### 2. Clonar o repositório

Clone este repositório para sua máquina local utilizando o Git:

```bash


git clone https://gitlab.com/sprints8071939/sprint-1.git
cd Sprints

```

## Configuração do Projeto Node.js ⚙️

### Inicializar o Projeto

Inicie o projeto criando o arquivo `package.json`:

```bash
npm init -y

```


## 4. Instalar Dependências 📦

Instale as dependências necessárias para testes:

```bash
npm install --save-dev mocha chai

```

## 5. Configuração do Script de Teste 🧪

Edite o arquivo `package.json` e altere tudo por script de teste. Substitua tudo por:

```{
  "name": "calculadora",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "chai": "^5.1.2",
    "mocha": "^10.8.2"
  },
  "type": "module"
}
```

## 6. Rodar o Projeto 🚀

Para rodar o seu projeto Node.js, use o comando:

```bash
node calculadora.js

```

## 7. Rodar os Testes 🧪

Agora, para rodar os testes com Mocha, use o seguinte comando:

```bash
npm test

```