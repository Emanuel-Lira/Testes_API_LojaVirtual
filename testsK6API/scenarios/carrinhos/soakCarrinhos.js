import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, SharedArray} from "../../support/base/baseTest.js"

export const options = testConfig.options.soakTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();


const userData = new SharedArray("Users", function () {
    const jsonData = JSON.parse(open("../data/static/staticData.json")).usersLogin;
    return jsonData;
});

const cartData = new SharedArray("Cart", function () {
    const jsonData = JSON.parse(open("../data/static/staticData.json")).cart;
    return jsonData;
});


export function setup() {
    const login = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, userData[0]);
    return { authorization: login.json().authorization }
}

export default function (authorization) {

  //Criar carrinhos
  const criaCarrinho = baseRest.post(ENDPOINTS.CARRINHO_ENDPOINT, cartData[0], authorization);

  //Cria uma variavel para checar o status code das requisições de criação de carrinhos
  const statusCodecriaCarrinho = baseChecks.checkStatusCode(criaCarrinho, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de criação de carrinhos
  const responseTimecriaCarrinho = criaCarrinho.timings.duration;

  addMetrics(statusCodecriaCarrinho, responseTimecriaCarrinho);

  sleep(1);
  
  //Cancelando compra
  const cancelar = baseRest.cancelar(ENDPOINTS.CANCELAR_COMPRA_ENDPOINT, authorization);
  
  //Cria uma variavel para checar o status code das requisições de cancelar compra
  let statusCodeCancelarCompra = baseChecks.checkStatusCode(cancelar, 200); 
  
  //Cria uma variavel para checar o tempo de resposta das requisições de cancelar compra
  let responseTimeCancelarCompra = cancelar.timings.duration;
  
  addMetrics(statusCodeCancelarCompra, responseTimeCancelarCompra);
  
  sleep(1);

};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosSoakCarrinhos.html": htmlReport(data, {
      title: "Soak Test - ServeRest /Carrinhos",
      description: `
        Soak Test na rota /Carrinhos com:
        - Aumento gradual até 300 VUs 
        - Permanencia em 300 VUs por 120 minutos
        - Validação de tempo de resposta
        - Verificação de taxa de erro
      `,
    }),
  };
}