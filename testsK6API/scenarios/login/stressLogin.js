import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport} from "../../support/base/baseTest.js"

export const options = testConfig.options.stressTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

const userData = new SharedArray("Users", function () {
    const jsonData = JSON.parse(open("../../data/static/staticData.json")).usersLogin;
    return jsonData;
});

export default function () {

  //Realizar login
  const login = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, userData[0]);

  //Cria uma variavel para checar o status code das requisições de login
  const statusCodelogin = baseChecks.checkStatusCode(login, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de login
  const responseTimelogin = login.timings.duration;

  addMetrics(statusCodelogin, responseTimelogin);

  sleep(1);
};

//Função para gerar o relatório
export function handleSummary(data) {
    return {
      "resultadosStressLogin.html": htmlReport(data, {
        title: "Stress Test - ServeRest /login",
        description: `
          Stress Test na rota /login com:
          - Aumento gradual de 100 VUs até 1000 VUs a cada 2 minutos
          - Validação de tempo de resposta
          - Verificação de taxa de erro
        `,
      }),
    };
}