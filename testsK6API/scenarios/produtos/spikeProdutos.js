import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, DynamicUserData} from "../../support/base/baseTest.js"

export const options = testConfig.options.spikeTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();


export default function () {

  //Listar produtos
  const listaProdutos = baseRest.get(ENDPOINTS.PRODUTOS_ENDPOINT);

  //Cria uma variavel para checar o status code das requisições de listagem de produtos
  const statusCodelistaProdutos = baseChecks.checkStatusCode(listaProdutos, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de listagem de produtos
  const responseTimelistaProdutos = listaProdutos.timings.duration;

  addMetrics(statusCodelistaProdutos, responseTimelistaProdutos);

  sleep(1);
};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosSpikeProdutos.html": htmlReport(data, {
      title: "Spike Test - ServeRest /Produtos",
      description: `
        Spike Test na rota /produtos com:
        - Aumento gradual até 300 VUs em 1m
        - Aumento gradual até 1000 VUs em 1m
        - Redução gradual até 300 VUs em 1m
        - Validação de tempo de resposta
        - Verificação de taxa de erro
      `,
    }),
  };
}
