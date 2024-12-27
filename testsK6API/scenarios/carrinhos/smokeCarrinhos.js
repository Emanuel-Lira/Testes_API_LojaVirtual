import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport} from "../../support/base/baseTest.js"

export const options = testConfig.options.smokeTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

export function setup() {
    const login = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, userData[0]);
    return { authorization: login.json().authorization }
}

export default function (authorization) {

  //Listando carrinhos
  const listaCarrinho = baseRest.get(ENDPOINTS.CARRINHO_ENDPOINT, authorization);

  //Cria uma variavel para checar o status code das requisições de listagem de carrinhos
  const statusCodelistaCarrinho = baseChecks.checkStatusCode(listaCarrinho, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de listagem de carrinhos
  const responseTimelistaCarrinho = listaCarrinho.timings.duration;

  addMetrics(statusCodelistaCarrinho, responseTimelistaCarrinho);

  sleep(1);

};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
      "resultadosSmokeCarrinhos.html": htmlReport(data, {
      title: "Smoke Test - ServeRest /carrinhos",
      description: `
      Smoke test na rota /carrinhos com:
      - 10 VUs por 1m de duração
      - Validação de tempo de resposta
      - Verificação de taxa de erro
      `,
      }),
  };
}