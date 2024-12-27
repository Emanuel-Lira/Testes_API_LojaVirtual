// Função para gerar um nome de usuário aleatório
export class DynamicProductData {
    constructor() {
       
        let produto = {
            nome: this.generateRandomUsername(),
            preco: 150,
            descricao: "Um produto qualquer para testes",
            quantidade: 10000
        };
        return produto
    }

    generateRandomUsername() {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        const length = 30;
        let username = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            username += chars.charAt(randomIndex);
        }

        return username;
    }
}