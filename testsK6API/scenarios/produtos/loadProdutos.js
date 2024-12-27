import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, DynamicUserData, DynamicProductData, SharedArray} from "../../support/base/baseTest.js"

export const options = testConfig.options.loadTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

const userData = new SharedArray("Users", function () {
    const jsonData = JSON.parse(open("../../data/static/staticData.json")).usersLogin;
    return jsonData;
});

export function setup() {
    //Realiza o login para obter token
    const login = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, userData[0]);
    return { authorization: login.json().authorization }
}

export default function (authorization) {

  //Criar produtos
  const criaProdutos = baseRest.post(ENDPOINTS.PRODUTOS_ENDPOINT, new DynamicProductData(), authorization);

  //Cria uma variavel para checar o status code das requisições de criação de produtos
  const statusCodecriaProdutos = baseChecks.checkStatusCode(criaProdutos, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de criação de produtos
  const responseTimecriaProdutos = criaProdutos.timings.duration;

  addMetrics(statusCodecriaProdutos, responseTimecriaProdutos);

  sleep(1);
  
  //Deletando produtos
  const deletaProduto = baseRest.delete(criaProdutos.json()._id, ENDPOINTS.PRODUTOS_ENDPOINT, authorization);
  
  //Cria uma variavel para checar o status code das requisições de listagem de produtos por ID
  let statusCodeDeletaProduto = baseChecks.checkStatusCode(deletaProduto, 200); 
  
  //Cria uma variavel para checar o tempo de resposta das requisições de listagem de produtos por ID
  let responseTimeDeletaProduto = deletaProduto.timings.duration;
  
  addMetrics(statusCodeDeletaProduto, responseTimeDeletaProduto);
  
  sleep(1);

};

//Função para gerar o relatório
export function handleSummary(data) {
    return {
      "resultadosLoadProdutos.html": htmlReport(data, {
        title: "Load Test - ServeRest /Produtos",
        description: `
          Load Test na rota /Produtos com:
          - Aumento gradual até 300 VUs em um minuto
          - Permanencia de 300 VUs em 5 minutos
          - Validação de tempo de resposta
          - Verificação de taxa de erro
        `,
      }),
    };
  }
  