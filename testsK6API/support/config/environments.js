import { Rate, Trend } from "k6/metrics";

const successRate = new Rate("success_rate");
const requestDuration = new Trend("request_duration");

export function addMetrics(checks, requestsDuration) {
    successRate.add(checks);
    requestDuration.add(requestsDuration);
}

const thresholds = {
    default: {
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<200"],
        http_req_failed: ["rate<0.05"],
    },

    onStress: {
        success_rate: ["rate>0.95"],
        http_req_duration: ["p(95)<900"],
        http_req_failed: ["rate<0.05"],
    }
}

const stages = {
    soakTest: [
        { duration: "1m", target: 300 },
        { duration: "120m", target: 300 }
    ],
    spikeTest: [
        { duration: "1m", target: 300 },
        { duration: "1m", target: 1000 },
        { duration: "1m", target: 300 },
    ],
    stressTest:[
        { duration: "2m", target: 100 },
        { duration: "2m", target: 200 },
        { duration: "2m", target: 300 },
        { duration: "2m", target: 400 },
        { duration: "2m", target: 500 },
        { duration: "2m", target: 600 },
        { duration: "2m", target: 700 },
        { duration: "2m", target: 800 },
        { duration: "2m", target: 900 },
        { duration: "2m", target: 1000 }
    ],
    loadTest: [
        { duration: "1m", target: 300 },
        { duration: "5m", target: 300 },
    ]

}

export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000",
        }
    },

    options: {

        tudoOkTest:{
            vus: 1,
            duration: "1s",
            iterations: 1
        },

        loadTest: {
            stages: stages.loadTest,
            thresholds: thresholds.default
        },
        
        smokeTest: {
            vus: 5,
            duration: "10s",
            thresholds: thresholds.default
        },
        
        stressTest:{
            stages: stages.stressTest,
            thresholds: thresholds.onStress
        },
        
        spikeTest: {
            stages: stages.spikeTest,
            thresholds: thresholds.onStress
        },
        
        soakTest: {
            stages: stages.soakTest,
            thresholds: thresholds.onStress
        }
    }
}

