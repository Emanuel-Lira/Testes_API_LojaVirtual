<!-- | Requisito (RFC)               | Caso de Teste (CT)                     | Bugs Relacionados na issue |
|-------------------------------|-----------------------------------------|---------------------------------|
| RFC-001: Cadastro de usuarios | CT-001: Testar login com provedor gmail| [bug_001](https://gitlab.com/sprints8071939/sprint-1/-/issues/23)   |
| RFC-002: Cadastro de usuarios | CT-002: Testar login com provedor hotmail|[bug_002](https://gitlab.com/sprints8071939/sprint-1/-/issues/19)  |
| RFC-003: senhas               | CT-003: Testar minimo de caracteres na senha |[bug_003 ](https://gitlab.com/sprints8071939/sprint-1/-/issues/20)  |
| RFC-004: senhas               | CT-003: Testar maximo de caracteres na senha |[bug_004 ](https://gitlab.com/sprints8071939/sprint-1/-/issues/21)  |
 -->


<!-- # Matriz de Rastreabilidade

<!-- | ID do Cenário | Cenário                                 | Pré-condições                                               | Ação                                           | Resultado Esperado                                     | -->
<!-- |---------------|-----------------------------------------|-----------------------------------------------------------|------------------------------------------------|-------------------------------------------------------|
| RFC - 001             | Listagem de Usuários                   | Existência de pelo menos um usuário cadastrado            | GET /usuarios                                  | 200 OK, lista de usuários em JSON                     |
| RFC - 002             | Listagem de Usuários Vazia             | Não existir nenhum usuário cadastrado                      | GET /usuarios                                  | 200 OK, lista vazia `[]`                              |
|RFC - 003             | Cadastro de Novo Usuário                | Não existir um usuário com o mesmo e-mail                 | POST /usuarios (dados válidos)                | 201 Created, mensagem de sucesso com ID               |
| RFC - 004          | Cadastro com E-mail Já Existente       | Um usuário com o e-mail  já cadastrado | POST /usuarios (e-mail existente)        | 400 Bad Request, mensagem de erro                      |
| RFC - 005          | Busca de Usuário por ID Válido         | Um usuário com ID conhecido ( 12345) existe          | GET /usuarios/12345                            | 200 OK, dados do usuário correspondente                 |
| RFC - 006        | Busca de Usuário por ID Inválido       | Um ID que não existe ( 99999)                        | GET /usuarios/99999                            | 404 Not Found, mensagem de erro                        |
| RFC - 007          | Exclusão de Usuário Sem Carrinho       | Um usuário com ID conhecido e sem carrinho                | DELETE /usuarios/12345                         | 200 OK, mensagem de sucesso ou "Nenhum registro excluído" |
| RFC - 008           | Exclusão de Usuário Com Carrinho       | Um usuário com ID conhecido e com carrinho                | DELETE /usuarios/12345                         | 400 Bad Request, mensagem de erro                      |
| RFC - 009          | Edição de Usuário Existente            | Um usuário com ID conhecido (12345) existe          | PUT /usuarios/12345 (novos dados)             | 200 OK, mensagem "Registro alterado com sucesso"      |
| RFC - 010         | Edição de Usuário com E-mail Já Existente | Um usuário com ID conhecido e um segundo usuário com o e-mail | PUT /usuarios/12345 (e-mail existente)        | 400 Bad Request, mensagem de erro                      |
| RFC - 011          | Edição de Usuário com ID não cadastrado | Um usuário com ID não existente                           | PUT /usuarios/99999                            | 201 Created  "Cadastro realizado com sucesso"                   |  -->


# Matriz de Rastreabilidade

| ID do Cenário | Cenário                                 | Pré-condições                                               | Ação                                           | Resultado Esperado                                     | Status do Teste |
|---------------|-----------------------------------------|-----------------------------------------------------------|------------------------------------------------|-------------------------------------------------------|------------------|
| RFC - 001     | Listagem de Usuários                   | Existência de pelo menos um usuário cadastrado            | GET /usuarios                                  | 200 OK, lista de usuários em JSON                     | Passou           |
| RFC - 002     | Listagem de Usuários Vazia             | Não existir nenhum usuário cadastrado                      | GET /usuarios                                  | 200 OK, lista vazia `[]`                              | Passou           |
| RFC - 003     | Cadastro de Novo Usuário                | Não existir um usuário com o mesmo e-mail                 | POST /usuarios (dados válidos)                | 201 Created, mensagem de sucesso com ID               | Passou           |
| RFC - 004     | Cadastro com E-mail Já Existente       | Um usuário com o e-mail já cadastrado                     | POST /usuarios (e-mail existente)             | 400 Bad Request, mensagem de erro                      | Passou           |
| RFC - 005     | Busca de Usuário por ID Válido         | Um usuário com ID conhecido  existe                | GET /usuarios/id                            | 200 OK, dados do usuário correspondente                 | Passou           |
| RFC - 006     | Busca de Usuário por ID Inválido       | Um ID que não existe                               | GET /usuarios/id                            | 404 Not Found, mensagem de erro                        | Passou           |
| RFC - 007     | Exclusão de Usuário Sem Carrinho       | Um usuário com ID conhecido e sem carrinho                | DELETE /usuarios/id                         | 200 OK, mensagem de sucesso ou "Nenhum registro excluído" | Passou           |
| RFC - 008     | Exclusão de Usuário Com Carrinho       | Um usuário com ID conhecido e com carrinho                | DELETE /usuarios/id                         | 400 Bad Request, mensagem de erro                      | Passou           |
| RFC - 009     | Edição de Usuário Existente            | Um usuário com ID conhecido existe                | PUT /usuarios/id (novos dados)             | 200 OK, mensagem "Registro alterado com sucesso"      | Passou           |
| RFC - 010     | Edição de Usuário com E-mail Já Existente | Um usuário com ID conhecido e um segundo usuário com o e-mail | PUT /usuarios/id (e-mail existente)        | 400 Bad Request, mensagem de erro                      | Passou           |
| RFC - 011     | Edição de Usuário com ID não cadastrado | Um usuário com ID não existente                           | PUT /usuarios/id (novos dados)             | 201 Created, mensagem "Cadastro realizado com sucesso" | Passou           |
