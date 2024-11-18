# Cenário de Testes para o Plano de Testes

---

## **Cenário 001: Listagem de Usuários**

**Objetivo:** Verificar se a API retorna a lista de todos os usuários cadastrados.

- **Pré-condições:** Existência de pelo menos um usuário cadastrado.
- **Ação:** Enviar uma requisição GET para `/usuarios`.
**Exemplo de Requisição:**
> ET /usuarios 
> Host: api.serverest.com
> Accept: application/json

- **Resultado Esperado:**
  - Status code: 200 OK
  - Retorno com uma lista de usuários no formato JSON.
  - Cada usuário deve conter os campos esperados (nome, email, password, Adm, id).

---

## **Cenário 002: Listagem de Usuários Vazia**

**Objetivo:** Verificar a resposta da API quando não há usuários cadastrados.

- **Pré-condições:** Não existir nenhum usuário cadastrado.
- **Ação:** Enviar uma requisição GET para `/usuarios`.
**Exemplo de Requisição:**

> GET /usuarios 
> Host: api.serverest.com
> Accept: application/json

- **Resultado Esperado:**
  - Status code: 200 OK
  - Retorno com uma lista vazia `[]`.

---

## **Cenário 003: Cadastro de Novo Usuário**

**Objetivo:** Testar o cadastro de um novo usuário com dados válidos.

- **Pré-condições:** Não existir um usuário com o mesmo e-mail.
- **Ação:** Enviar uma requisição POST para `/usuarios` com os dados válidos (nome, e-mail, senha, administrador).

**Exemplo de requisição:**  

> POST /usuarios 
> Host: api.serverest.com
> Content-Type: application/json

> {
>   "nome": "João Silva",
>   "email": "joao.silva@example.com",
>   "senha": "senha123",
>   "administrador": false
> }

- **Resultado Esperado:**
  - Status code: 201 Created
  - Retorno mensagem de cadastrado realizado com sucesso, incluindo o id gerado.

---

## **Cenário 004: Cadastro com E-mail Já Existente**

**Objetivo:** Validar a resposta da API ao tentar cadastrar um usuário com e-mail já existente.

- **Pré-condições:** Um usuário com o e-mail já cadastrado.
- **Ação:** Enviar uma requisição POST para `/usuarios` com o e-mail existente.

**Exemplo de requisição:**  
> POST /usuarios 
> Host: api.serverest.com
> Content-Type: application/json

> {
>   "nome": "Maria Oliveira",
>   "email": "teste@example.com",
>   "senha": "senha456",
>   "administrador": false
> }

- **Resultado Esperado:**
  - Status code: 400 Bad Request
  - Mensagem de erro informando que o e-mail já está cadastrado.

---

## **Cenário 005: Busca de Usuário por ID Válido**

**Objetivo:** Testar a busca de um usuário existente pelo ID.

- **Pré-condições:** Um usuário com ID conhecido  existe.
- **Ação:** Enviar uma requisição GET para `/usuarios/12345`.
**Exemplo de Requisição:**
> GET /usuarios/12345 HTTP/1.1
> Host: api.serverest.com
> Accept: application/json

- **Resultado Esperado:**
  - Status code: 200 OK
  - Retorno com os dados do usuário correspondente.

---

## **Cenário 006: Busca de Usuário por ID Inválido**

**Objetivo:** Validar a resposta da API para um ID de usuário que não existe.

- **Pré-condições:** Um ID que não existe.
- **Ação:** Enviar uma requisição GET para `/usuarios/99999`.
**Exemplo de Requisição:**
> GET /usuarios/99999 HTTP/1.1
> Host: api.serverest.com
> Accept: application/json

- **Resultado Esperado:**
  - Status code: 404 Not Found
  - Mensagem de erro informando que o usuário não foi encontrado.

---

## **Cenário 007: Exclusão de Usuário Sem Carrinho**

**Objetivo:** Testar a exclusão de um usuário que não possui carrinho associado.

- **Pré-condições:** Um usuário com ID conhecido e sem carrinho.
- **Ação:** Enviar uma requisição DELETE para `/usuarios/12345`.
**Exemplo de Requisição:**
> DELETE /usuarios/12345 HTTP/1.1
> Host: api.serverest.com

- **Resultado Esperado:**
  - Status code: 200 OK
  - "Registro excluído com sucesso | Nenhum registro excluído"

---

## **Cenário 008: Exclusão de Usuário Com Carrinho**

**Objetivo:** Validar a resposta da API ao tentar excluir um usuário que possui carrinho associado.

- **Pré-condições:** Um usuário com ID conhecido e com carrinho.
- **Ação:** Enviar uma requisição DELETE para `/usuarios/12345`.

**Exemplo de Requisição:**
> DELETE /usuarios/12345 HTTP/1.1
> Host: api.serverest.com



- **Resultado Esperado:**
  - Status code: 400 Bad Request 
  - Mensagem de erro "Não é permitido excluir usuário com carrinho cadastrado".

---

## **Cenário 009: Edição de Usuário Existente**

**Objetivo:** Testar a edição de um usuário existente.

- **Pré-condições:** Um usuário com ID conhecido existe.
- **Ação:** Enviar uma requisição PUT para `/usuarios/12345` com novos dados.
**Exemplo de Requisição:**
> PUT /usuarios/12345 HTTP/1.1
> Host: api.serverest.com
> Content-Type: application/json

> {
>   "nome": "João Silva Atualizado",
>   "email": "joao.atualizado@example.com",
>   "senha": "novaSenha123",
>   "administrador": true
> }



- **Resultado Esperado:**
  - Status code: 200 OK 
  - Retorno com mensagem "Registro alterado com sucesso"

---

## **Cenário 010: Edição de Usuário com E-mail Já Existente**

**Objetivo:** Validar a resposta da API ao tentar editar um usuário com e-mail que já pertence a outro usuário.

- **Pré-condições:** Um usuário com ID conhecido e um segundo usuário com o e-mail .
- **Ação:** Enviar uma requisição PUT para `/usuarios/12345` com o e-mail .

**Exemplo de Requisição:**
> PUT /usuarios/12345 HTTP/1.1
> Host: api.serverest.com
> Content-Type: application/json
> 
> {
>   "nome": "João Silva",
>   "email": "teste@example.com",
>   "senha": "novaSenha456",
>   "administrador": false
> }

- **Resultado Esperado:**
  - Status code: 400 Bad Request
  - Mensagem de erro "Este email já está sendo usado".

---

## **Cenário 011: Edição de Usuário com ID não cadastrado**

**Objetivo** Validar a resposta da API ao tentar editar um usuario que não existe.

- **pré Condições:** Um usuario com ID não existente
- **Ação:** Enviar uma requisição PUT para `/usuarios/99999099` 

**Exemplo de Requisição:**
 
> **PUT /usuarios/99999 HTTP/1.1**
> **Host: api.serverest.com**
> **Content-Type: application/json**
> 
> {
>   "nome": "Usuario Inexistente",
>   "email": "inexistente@example.com",
>   "senha": "senhaInexistente",
>   "administrador": false
> }

- **Resultado Esperado:**
  - Status Code: 201 Created
  - Mensagem de retorno "Cadastro realizado com sucesso" e ID.


