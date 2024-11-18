## 1. **Sintaxe Básica**

- **Variáveis**: Usamos `var`, `let` e `const` para declarar variáveis.
    
    ```jsx
   
    let nome = "João";
    const idade = 30;
    
    ```
    
- **Tipos de Dados**:
    - String: `"Texto"`
    - Number: `123`, `3.14`
    - Boolean: `true`, `false`
    - Array: `[1, 2, 3]`
    - Object: `{ chave: "valor" }`
    
    Exemplo:
    
    ```jsx
    
    let nome = "Maria";  // string
    let idade = 25;      // number
    let ativo = true;    // boolean
    
    ```
    

## 2. **Operadores**

- **Aritméticos**: `+`, ``, ``, `/`, `%`
- **Relacionais**: `==`, `===`, `!=`, `<`, `>`, `<=`, `>=`
- **Lógicos**: `&&`, `||`, `!`
- **Atribuição**: `=`, `+=`, `=`, `=`, `/=`

Exemplo:

```jsx

let a = 10;
let b = 5;
let soma = a + b; // soma = 15

```

## 3. **Estruturas de Controle**

- **Condicional (if-else)**:
    
    ```jsx
   
    if (idade >= 18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
    
    ```
    
- **Switch**:
    
    ```jsx
    
    let cor = "vermelho";
    switch(cor) {
      case "azul":
        console.log("Cor azul");
        break;
      case "vermelho":
        console.log("Cor vermelha");
        break;
      default:
        console.log("Cor desconhecida");
    }
    
    ```
    
- **Laços (loops)**:
    - `for`: Itera um número específico de vezes.
        
        ```jsx
       
        for (let i = 0; i < 5; i++) {
          console.log(i); // 0, 1, 2, 3, 4
        }
        
        ```
        
    - `while`: Executa enquanto a condição for verdadeira.
        
        ```jsx
       
        let i = 0;
        while (i < 5) {
          console.log(i);
          i++;
        }
        
        ```
        

## 4. **Funções**

Funções são blocos de código reutilizáveis.

```jsx

function saudacao(nome) {
  return "Olá, " + nome;
}

console.log(saudacao("Ana")); // Olá, Ana

```

Funções também podem ser atribuídas a variáveis e passadas como argumentos para outras funções.

```jsx

const somar = function(a, b) {
  return a + b;
};

```

## 5. **Objetos**

Objetos são coleções de pares chave-valor.

```jsx
let pessoa = {
  nome: "Carlos",
  idade: 28,
  saudacao: function() {
    return "Oi, meu nome é " + this.nome;
  }
};

console.log(pessoa.saudacao()); // Oi, meu nome é Carlos

```

## 6. **Arrays**

Arrays são listas de valores.

```jsx

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // maçã

```

### Métodos Comuns de Arrays:

- `.push()`: Adiciona um item no final do array.
- `.pop()`: Remove o último item.
- `.shift()`: Remove o primeiro item.
- `.unshift()`: Adiciona um item no início.
- `.forEach()`: Executa uma função para cada item.

```jsx

frutas.push("uva"); // ["maçã", "banana", "laranja", "uva"]

```

## 7. **Manipulação de DOM**

JavaScript é frequentemente usado para manipular o DOM (Document Object Model) em páginas web.

- **Selecionando elementos**:
    
    ```jsx
    
    let titulo = document.getElementById("titulo");
    let paragrafos = document.getElementsByTagName("p");
    
    ```
    
- **Alterando conteúdo**:
    
    ```jsx
   
    titulo.innerHTML = "Novo Título!";
    
    ```
    
- **Adicionando eventos**:
    
    ```jsx
   
    let botao = document.getElementById("meuBotao");
    botao.addEventListener("click", function() {
      alert("Botão clicado!");
    });
    
    ```