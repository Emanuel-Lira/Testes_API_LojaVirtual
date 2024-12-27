import {sleep} from "k6";
import {BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, DynamicUserData} from "../../support/base/baseTest.js"

export const options = testConfig.options.stressTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

export default function () {

  //Criando usuarios

  const criaUsuario = baseRest.post(ENDPOINTS.USUARIOS_ENDPOINT, new DynamicUserData());

  //Cria uma variavel para checar o status code das requisições de criação de usuarios
  const statusCodeCriaUsuario = baseChecks.checkStatusCode(criaUsuario, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de criação de usuarios
  const responseTimeCriaUsuario = criaUsuario.timings.duration;

  addMetrics(statusCodeCriaUsuario, responseTimeCriaUsuario);

  sleep(1);

  //Deletando usuarios
  const deletaUsuario = baseRest.delete(criaUsuario.json()._id, ENDPOINTS.USUARIOS_ENDPOINT);
  
  //Cria uma variavel para checar o status code das requisições de listagem de usuarios por ID
  let statusCodeDeletaUsuario = baseChecks.checkStatusCode(deletaUsuario, 200); 
  
  //Cria uma variavel para checar o tempo de resposta das requisições de listagem de usuarios por ID
  let responseTimeDeletaUsuario = deletaUsuario.timings.duration;
  
  addMetrics(statusCodeDeletaUsuario, responseTimeDeletaUsuario);
  
  sleep(1);

};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosTesteCargaUsuarios.html": htmlReport(data, {
      title: "Stress Test - ServeRest /usuarios",
      description: `
        Stress Test na rota /usuarios com:
        - Aumento gradual de 100 VUs até 1000 VUs a cada 2 minutos
        - Validação de tempo de resposta
        - Verificação de taxa de erro
      `,
    }),
  };
}