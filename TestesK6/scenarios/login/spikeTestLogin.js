import http from "k6/http";
import { check, sleep } from "k6";
import { Rate, Trend } from "k6/metrics";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const successRate = new Rate("success_rate");
const requestDuration = new Trend("request_duration");

export const options = {
  stages: [
    { duration: "10s", target: 0 },    
    { duration: "30s", target: 150 },  
    { duration: "2m", target: 150 },   // Sustentar o pico
    { duration: "30s", target: 0 }, 
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
    "SpikeTestLogin.html": htmlReport(data, {
      title: "Spike Test - ServeRest /login",
      description: `
        Spike Test na rota /login com:
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
  const url = "http://localhost:3000/login";

  const body = JSON.stringify({
    "email": "fulano@qa.com",
    "password": "teste"
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, body, params);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  sleep(1);
}