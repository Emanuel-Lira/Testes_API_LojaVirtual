## Plano de Testes

---

### **Objetivo:**
Testar a funcionalidade de cadastro de vendedores (usuários) na API do ServeRest, garantindo que todos os critérios de aceite, regras de negócio e operações CRUD funcionem corretamente.

---

### Estratégias

  - Teste Funcional: Verificar se as respostas da API correspondem ao esperado para diferentes cenários.
  - Teste de Validação: Garantir que os dados retornados e as mensagens de erro estejam corretos.
  - Teste de Regressão: Confirmar que alterações futuras não quebrem funcionalidades existentes.

### Suíte de Testes

1. **GET /usuarios**
   - Testar listagem de todos os usuários.
   - Testar o retorno quando não houver usuários cadastrados.

2. **POST /usuarios**
   - Testar cadastro de um novo usuário com dados válidos.
   - Validar erro ao cadastrar um usuário com e-mail já existente.
   - Testar resposta com dados inválidos.

3. **GET /usuarios/{_id}**
   - Testar busca de um usuário existente pelo ID.
   - Validar resposta para um ID de usuário que não existe.

4. **DELETE /usuarios/{_id}**
   - Testar a exclusão de um usuário sem carrinho associado.
   - Validar erro ao tentar excluir um usuário com carrinho cadastrado.

5. **PUT /usuarios/{_id}**
   - Testar edição de um usuário existente.
   - Testar cadastro ao editar um ID não existente.
   - Validar erro ao tentar editar com e-mail já existente.


### Prioridades 
  
  - **Alta:**

    - Testes de cadastro de usuários com e-mail único (POST /usuarios).
    - Testes de exclusão de usuários (DELETE /usuarios/{_id}).
    - Testes de edição de usuários (PUT /usuarios/{_id}).

  - **Média:**

    - Testes de validação de mensagens de erro (e.g., e-mail já cadastrado, usuário não encontrado).
    - Testes de cenários com parâmetros de consulta.

  - **Baixa:**
    - Testes de performance e segurança, que podem ser realizados depois.


### Testes candidatos a automação

  - Testes de listagem de usuários.
  - Testes de cadastro de usuários (incluindo tentativas com e-mail existente).
  - Testes de busca de usuários por ID.
  - Testes de edição e exclusão de usuários.

---



