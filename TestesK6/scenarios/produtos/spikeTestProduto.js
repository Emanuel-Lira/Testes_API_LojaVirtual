import http from "k6/http";
import { check, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const successRate = new Rate("success_rate");
const requestDuration = new Trend("request_duration");

export const options = {
  stages: [
    { duration: "1m", target: 150 },
    { duration: "1m", target: 500 },
    { duration: "1m", target: 150 },
  ],
  thresholds: {
    success_rate: ["rate>0.95"],
    http_req_duration: ["p(95)<900"],
    http_req_failed: ["rate<0.05"],
  },
};

//Função para gerar relatório html

export function handleSummary(data) {
  return {
    "SpikeTestProdutos.html": htmlReport(data, {
      title: "Spike Test - ServeRest /produtos",
      description: `
        Spike Test na rota /produtos com:
        - Aumento gradual até 150 VUs em 1m
        - Aumento gradual até 500 VUs em 1m
        - Redução gradual até 150 VUs em 1m
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

  //GET request for /produtos

  const getResponse = http.get(`${URL}/produtos`, params);

  const getChecks = check(getResponse, {
    "Status code GET é 200": (r) => r.status === 200,
    "Resposta contém produtos": (r) => r.json().quantidade >= 0,
    "Tempo de resposta GET <= 200ms": (r) => r.timings.duration <= 200,
  });

  successRate.add(getChecks);
  requestDuration.add(getResponse.timings.duration);

  sleep(1);

  //GET request for /produtos/:id

  const produto = "1fzgQn6YADXbapIN";

  const getResponseById = http.get(`${URL}/produtos/${produto}`, params);

  const getChecksById = check(getResponseById, {
    "Status code GET by ID é 200": (r) => r.status === 200,
    "Tempo de resposta GET <= 200ms": (r) => r.timings.duration <= 200,
  });

  successRate.add(getChecksById);
  requestDuration.add(getResponseById.timings.duration);

  sleep(1);
}