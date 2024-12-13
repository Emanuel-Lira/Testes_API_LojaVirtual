## Cobertura de testes de APIs


- Existe uma forma de calcular a cobertura de testes, que se baseia nos critérios de cobertura de entrada (Input Coverage) e cobertura de saída (Output Coverage).

### Path Coverage (input)
  - Verifica a cobertura da suíte de testes de acordo com os endpoints que a API possui.
    - ao receber uma solicitação, o programa pode executar caminhos diferentes, então precisamos garantir que os endpoints da API REST estão cobertos pelos testes.
   <br>
  - A análise é realizada pela quantidade de URI  
  <br>
  - O ideal é realizar ao menos uma requisição para verificar cada endpoint.
  <br>

- Se verificar a imagem do swagger abaixo, podemos notar 13 endpoints diferentes:

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*fvX0D9IzUnB2EZEn" >

- Suponha que a automação desta API tenha apenas 6 desses endpoints

  - **Para calcular a cobertura: quantidade de testes automatizados / quantidade de endpoints na API REST.**

  6/13 = 0,46 = 46%

  - 46% dos testes de path estão cobertos pela automação.

### Operator Coverage (input)  
  - Confere a cobertura de testes de todos os métodos existentes na API REST (GET, POST, PUT, DELETE…)
<br>
  - O swagger abaixo tem um total de 19 operações:

 <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*FLEc8zdY1hZ1IWDY" >

 - Vamos supor que dezesseis métodos tiveram testes automatizados implementados.

 - **Para calcular a cobertura: quantidade de operações da API estão automatizados/ quantidade total de operações da API REST.**

 **16/19 = 0,84 = 84%**

 - Então temos 84% dos testes de operações cobertos.

 
### Parameter Coverage (input)

- Verifica a cobertura de uma suíte de testes conforme os parâmetros existentes em cada método da API.

- Para atingir 100% de cobertura de testes é necessário testar todos os parâmetros de entrada de cada operação pelo menos uma vez.

- Suponha que a API tenha um total de 5 parâmetros, e na automação da API os 5 parâmetros foram cobertos.

- **Quantidade total de parâmetros cobertos na suítes de testes / quantidade total de parâmetros nos métodos da API.**

**5/5 = 1 = 100%**

**Parameter Value Coverage (input)**

- Confere a cobertura da suíte de testes de parâmetros booleano e enum nas operações (se existirem).

**Quantidade total de valores diferentes enviados / quantidade total de valores que podem assumir.**

### Content-Type Coverage (input e output)

- se for demonstrado nas opções do content-type de envio application/json e um application/xml, então duas opções do parâmetros de envio deveriam ser cobertas.
- Também devem ser verificadas as opções do content-type da resposta:

**Quantidade total de content-type em cada operação cobertos pela suíte de testes / Quantidade total de content-type em todas as operações da API.**


- Suponha a API possua as operações POST, PUT, GET e DELETE. POST e PUT possuem cada um 2 opções de content-type, logo a API possui um total de 4 content-type a serem cobertos.
  - A automação cobriu apenas uma opção, no POST e uma opção, no PUT. Sendo assim:

   **2/4 = 0,5 = 50%**

### Operation Flow (input)

- Este critério mede um conjunto de testes de acordo com as sequências de operações que é executado.
  - Se todos os fluxos estiverem implementados no teste automatizado, então a API Rest está 100% coberta pela automação.
  - se é possível criar 4 tipos de fluxos, mas sua automação possui apenas um, por exemplo, criação (Post) e consulta (Get id), então terás apenas 25% de cobertura.

### Response Properties Body Coverage (Output)
   - Este critério mede os parâmetros no corpo da resposta, então deve ser verificado se todas as propriedades da resposta estão cobertas pelo teste.

### Status Code Coverage (Output)
   - Este critério verifica quais status codes existentes em cada endpoint estão cobertos pelos testes.

    - Suponha que a API tenha um total de 25 status code, e na automação da API apenas 15 status code foram cobertos.
      - **15/25=0,6=60%**

    - para atingir 100% da cobertura de testes, todos os status codes de cada operação deve estar implementado nos testes.  


## Testes candidatos à automação

 - Conversa com o cliente
 - Lista de prioridades vinculadas a aplicação do cliente
 - Riscos
    - Priorizar testes que envolvem funcionalidades essenciais para o negócio.
 - Repetitividade 
    - Automatizar testes que precisam ser realizados regularmente, como testes de regressão
 - Valor de Negócio 
    - Priorizar testes que afetam diretamente a experiência do cliente ou resultados de negócio.
 - Custo de Manutenção 
    - Avaliar a estabilidade do código e a frequência de alterações nas funcionalidades testadas
 - Automação de Cenários de Usuário  
    - Focar na automação de casos que refletem o uso real do sistema pelos usuários. 
<br>


