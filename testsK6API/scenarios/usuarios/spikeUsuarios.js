import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, DynamicUserData, SharedArray} from "../../support/base/baseTest.js"

export const options = testConfig.options.spikeTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

export default function () {

  //Criando novos usuarios
  const criaUsuario = baseRest.post(ENDPOINTS.USUARIOS_ENDPOINT, new DynamicUserData());

  //Cria uma variavel para checar o status code das requisições de criação de usuarios
  const statusCodeCriaUsuario = baseChecks.checkStatusCode(criaUsuario, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de criação de usuarios
  const responseTimeCriaUsuario = criaUsuario.timings.duration;

  //Adiciona as metricas ao relatório do teste
  addMetrics(statusCodeCriaUsuario, responseTimeCriaUsuario);

  sleep(1);

};

//Gerando Relatório do Teste

export function handleSummary(data) {
  return {
    "resultadosSpikeUsuarios.html": htmlReport(data, {
      title: "Spike Test - ServeRest /usuarios",
      description: `
        Spike Test na rota /usuarios com:
        - Aumento gradual até 300 VUs em 1m
        - Aumento gradual até 1000 VUs em 1m
        - Redução gradual até 300 VUs em 1m
        - Validação de tempo de resposta
        - Verificação de taxa de erro
      `,
    }),
  };
}
