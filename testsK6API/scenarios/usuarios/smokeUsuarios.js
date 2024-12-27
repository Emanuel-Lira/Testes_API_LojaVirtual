import {sleep} from "k6";
import {BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport} from "../../support/base/baseTest.js"


export const options = testConfig.options.smokeTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();


export default function () {

  //Listando usuarios  
  const listaUsuario = baseRest.get(ENDPOINTS.USUARIOS_ENDPOINT);

  //Cria uma variavel para checar o status code das requisições de listagem de usuarios
  let statusCodeListaUsuario = baseChecks.checkStatusCode(listaUsuario, 200);

  //Cria uma variavel para checar o tempo de resposta das requisições de listagem de usuarios
  let responseTimeListaUsuario = listaUsuario.timings.duration;

  //Adiciona as metricas ao relatório do teste
  addMetrics(statusCodeListaUsuario, responseTimeListaUsuario);

  sleep(1);
  
};


//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosSmokeGETUsuarios.html": htmlReport(data, {
      title: "Smoke Test - ServeRest GET /usuarios",
      description: `
      Smoke test na rota /usuarios com:
      - 10 VUs por 1m de duração
      - Validação de tempo de resposta
      - Verificação de taxa de erro
    `,
    }),
  };
}