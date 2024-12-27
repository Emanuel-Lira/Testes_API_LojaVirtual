import {
  sleep,BaseChecks,BaseRest,ENDPOINTS,testConfig,addMetrics,htmlReport,DynamicUserData,DynamicProductData,SharedArray,
} from "../../support/base/baseTest.js";

export const options = testConfig.options.smokeTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

const userData = new SharedArray("Users", function () {
  const jsonData = JSON.parse(
    open("../../data/static/staticData.json")
  ).usersLogin;
  return jsonData;
});

const cartData = new SharedArray("Cart", function () {
  const jsonData = JSON.parse(open("../../data/static/staticData.json")).cart;
  return jsonData;
});

export default function () {
  //Listar produtos
  const listaProdutos = baseRest.get(ENDPOINTS.PRODUTOS_ENDPOINT);

  //Cria uma variavel para checar o status code das requisições de listagem de produtos
  const statusCodelistaProdutos = baseChecks.checkStatusCode(
    listaProdutos,
    201
  );

  //Cria uma variavel para checar o tempo de resposta das requisições de listagem de produtos
  const responseTimelistaProdutos = listaProdutos.timings.duration;

  addMetrics(statusCodelistaProdutos, responseTimelistaProdutos);

  sleep(1);

  //Criando usuarios
  const newUser = new DynamicUserData();
  const criaUsuario = baseRest.post(ENDPOINTS.USUARIOS_ENDPOINT, newUser);

  //Cria uma variavel para checar o status code das requisições de criação de usuarios
  const statusCodeCriaUsuario = baseChecks.checkStatusCode(criaUsuario, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de criação de usuarios
  const responseTimeCriaUsuario = criaUsuario.timings.duration;

  addMetrics(statusCodeCriaUsuario, responseTimeCriaUsuario);

  sleep(1);

  //Realizar login
  const userLogin = {
    email: newUser.email,
    password: newUser.password,
  };
  const login = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, userLogin);

  console.log(login.json().authorization);
  //Cria uma variavel para checar o status code das requisições de login
  const statusCodelogin = baseChecks.checkStatusCode(login, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de login
  const responseTimelogin = login.timings.duration;

  addMetrics(statusCodelogin, responseTimelogin);

  sleep(1);

  //Criar carrinhos
  const authorization = {
    authorization: login.json().authorization,
  };
  const criaCarrinho = baseRest.post(
    ENDPOINTS.CARRINHO_ENDPOINT,
    cartData[0],
    authorization
  );

  console.log(criaCarrinho.json());

  //Cria uma variavel para checar o status code das requisições de criação de carrinhos
  const statusCodecriaCarrinho = baseChecks.checkStatusCode(criaCarrinho, 201);

  //Cria uma variavel para checar o tempo de resposta das requisições de criação de carrinhos
  const responseTimecriaCarrinho = criaCarrinho.timings.duration;

  addMetrics(statusCodecriaCarrinho, responseTimecriaCarrinho);

  sleep(1);

  //Concluir compra
  const concluir = baseRest.concluir(
    ENDPOINTS.CONCLUIR_COMPRA_ENDPOINT,
    authorization
  );
  console.log(concluir.json());

  //Cria uma variavel para checar o status code das requisições de concluir compra
  let statusCodeConcluirCompra = baseChecks.checkStatusCode(concluir, 200);

  //Cria uma variavel para checar o tempo de resposta das requisições de concluir compra
  let responseTimeConcluirCompra = concluir.timings.duration;

  addMetrics(statusCodeConcluirCompra, responseTimeConcluirCompra);

  sleep(1);
}

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosFluxoCompraCompleta.html": htmlReport(data, {
      title: "Smoke Test - ServeRest Fluxo de compra completo",
      description: `
        - 10 VUs por 1m de duração
        - Validação de tempo de resposta
        - Verificação de taxa de erro
        `,
    }),
  };
}
