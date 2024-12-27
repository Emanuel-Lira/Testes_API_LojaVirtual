export class BaseService {
    constructor(baseURI) {
        this.baseURI = baseURI;
        this.response;
    }
    getResponse() {
        return this.response;
    }
}