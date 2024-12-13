import http from "k6/http";
import { check, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const successRate = new Rate("success_rate");
const requestDuration = new Trend("request_duration");

export const options = {
  vus: 10,
  duration: "1m",
  thresholds: {
    success_rate: ["rate>0.95"],
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.05"],
  },
};

// Função para gerar relatório html

export function handleSummary(data) {
  return {
    "SmokeTestProdutos.html": htmlReport(data, {
      title: "Smoke Test - ServeRest /produtos",
      description: `
        Smoke test na rota /produtos com:
        - 10 VUs por 1m de duração
        - Validação de tempo de resposta
        - Verificação de taxa de erro
      `,
    }),
  };
}

export default function () {
  const URL = "http://localhost:3000";

  // Realizando login

  const paramsLogin = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const bodyLogin = JSON.stringify({
    "email": "fulano@qa.com",
    "password": "teste"
  });
  const loginResponse = http.post(`${URL}/login`, bodyLogin, paramsLogin);

  const token = loginResponse.json().authorization;

  const params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  };

  //POST request for /produtos

  const body = JSON.stringify({
    nome: `Produto Teste ${Date.now()}`,
    preco: 100,
    descricao: `${Date.now()}`,
    quantidade: 10,
  });

  const postResponse = http.post(`${URL}/produtos`, body, params);

  const idProdutos = postResponse.json()._id;

  check(postResponse, {
    "Status code POST é 201": (r) => r.status === 201,
    "Resposta contém ID do usuário": (r) => r.json()._id !== undefined,
  });

  sleep(1);

  //DELETE request for /produtos/:id

  const deleteResponse = http.del(`${URL}/produtos/${idProdutos}`, params);

  const deleteChecks = check(deleteResponse, {
    "Status code DELETE é 200": (r) => r.status === 200,
    "Tempo de resposta DELETE <= 200ms": (r) => r.timings.duration <= 200,
  });

  successRate.add(deleteChecks);
  requestDuration.add(deleteResponse.timings.duration);

  sleep(1);
}
