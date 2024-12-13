import http from "k6/http";
import { check, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const successRate = new Rate("success_rate");
const requestDuration = new Trend("request_duration");

export const options = {
  stages: [
    { duration: "1m", target: 300 },
    { duration: "60m", target: 300 },
  ],
  thresholds: {
    success_rate: ["rate>0.95"],
    http_req_duration: ["p(95)<300"],
    http_req_failed: ["rate<0.05"],
  },
};

//Função para gerar relatório html

export function handleSummary(data) {
  return {
    "SoakTestUsuarios.html": htmlReport(data, {
      title: "Soak Test - ServeRest /usuarios",
      description: `
        Soak Test na rota /usuarios com:
        - Aumento gradual até 300 VUs 
        - Permanencia em 300 VUs por 60 minutos
        - Validação de tempo de resposta
        - Verificação de taxa de erro
      `,
    }),
  };
}

export default function () {
  const URL = "http://localhost:3000";
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //GET request for /usuarios

  const getResponse = http.get(`${URL}/usuarios`, params);

  const getChecks = check(getResponse, {
    "Status code GET é 200": (r) => r.status === 200,
    "Resposta contém usuários": (r) => r.json().quantidade >= 0,
    "Tempo de resposta GET <= 200ms": (r) => r.timings.duration <= 200,
  });

  successRate.add(getChecks);
  requestDuration.add(getResponse.timings.duration);

  //POST request for /usuarios

  const body = JSON.stringify({
    nome: `Usuário Teste ${Date.now()}`,
    email: `test${Date.now()}@qa.com`,
    password: "teste123",
    administrador: "false",
  });

  const postResponse = http.post(`${URL}/usuarios`, body, params);

  const idUsuarios = postResponse.json()._id;

  check(postResponse, {
    "Status code POST é 201": (r) => r.status === 201,
    "Resposta contém ID do usuário": (r) => r.json()._id !== undefined,
  });

  sleep(1);

  //GET request for /usuarios/:id

  const getResponseById = http.get(`${URL}/usuarios/${idUsuarios}`, params);

  const getChecksById = check(getResponseById, {
    "Status code GET by ID é 200": (r) => r.status === 200,
    "Tempo de resposta GET <= 200ms": (r) => r.timings.duration <= 200,
  });

  successRate.add(getChecksById);
  requestDuration.add(getResponseById.timings.duration);

  sleep(1);

  //DELETE request for /usuarios/:id

  const deleteResponse = http.del(`${URL}/usuarios/${idUsuarios}`, params);

  const deleteChecks = check(deleteResponse, {
    "Status code DELETE é 200": (r) => r.status === 200,
    "Tempo de resposta DELETE <= 200ms": (r) => r.timings.duration <= 200,
  });

  successRate.add(deleteChecks);
  requestDuration.add(deleteResponse.timings.duration);

  sleep(1);
}
