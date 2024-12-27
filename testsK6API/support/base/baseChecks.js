import { check } from "k6";

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        return check(response, {
            "Status code correto": (r) => r.status === expectedStatus
        });
    }

    checkResponseTime(response, expectedTime = 200) {
        return check(response, {
            "Tempo de resposta": (r) => r.timings.duration < expectedTime
        });
    }
}