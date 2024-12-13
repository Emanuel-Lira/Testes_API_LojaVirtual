## Testes Funcionais 

  - Swagger = documentação da API
  - Regras de negocio => pode estar em casos de uso, email, na mente de alguem

  - São testes que validam a função
  - interpretar regras de negocio
  - ler ebook juliodelima.com.br - testes de softwares para iniciantes

- RN: Apenas administradores podem registrar novas viagens

  - Entradas: Credencial(Administrador => registrar, Usuario => não registrar, Expirada => não registrar e Inválida => não registrar)
  - Processamento: 
  - Saída: 
  
---
  
## Tipos de erros (Back-End)

   - **Gravidade**
   - **Prioridade**
   - **Risco**

   ### Gravidade

   - Refere-se à severidade do impacto de um erro ou falha no sistema.

   - **Exemplo:** Um erro que causa a falha completa de um sistema (como um erro de sistema crítico) tem alta gravidade, enquanto um erro menor que não afeta a funcionalidade principal (como um erro de formatação em um relatório) tem baixa gravidade.

   ### Prioridade

   - Indica a urgência com que um erro deve ser corrigido ou uma funcionalidade deve ser implementada.

   - É influenciada pela gravidade, mas também por fatores como prazos de entrega e necessidades do cliente.
   - **Exemplo:** Um erro grave que afeta todos os usuários deve ter alta prioridade para correção

   ### Risco

   - Refere-se à probabilidade de um evento indesejado ocorrer e ao impacto que isso teria no projeto ou no sistema.

   - **Exemplo:** Um risco elevado pode ser a dependência de uma biblioteca de terceiros que não é bem mantida

   ### Inter-relações

   - **Gravidade e Prioridade:** Embora um erro grave geralmente tenha alta prioridade, nem todos os erros de alta gravidade são tratados imediatamente.

   - **Risco e Gravidade:** Um erro de alta gravidade pode apresentar um alto risco se não for tratado adequadamente

  - **Risco e Prioridade:** Um projeto pode ter alta prioridade para tratar riscos identificados, mesmo que não estejam relacionados a erros específicos.


  ## Dinâmica em Grupo

  - Erros de Autenticação e Autorização

    - **Problemas:**
      - Vazamento de dados sensíveis.
    - **Prevenção:**  
      - Implementar protocolos de segurança
      - auditorias de segurança
      - Treinar a equipe sobre as melhores práticas de segurança  

  - Erros de Segurança

    - **Problemas**
      - Dados críticos podem ser perdidos ou corrompidos
      - Ameaças como malware ou ransomware
    - **Prevenção:**  
      -  Realizar testes de penetração

  - Erros de Desempenho

    - **Problemas**
      - Redução de produtividade.
    - **Prevenção:**  
      - Monitorar e otimizar consultas de banco de dados e executar profiling de código regularmente  
    
   ## Casos Reais
    
   ### Facebook (2019) 
      - O Facebook expôs dados de milhões de usuários devido a erros de configuração em suas APIs

   ### Twitter (2020) 
      - Um ataque coordenado resultou no comprometimento de contas de alto perfil. O ataque foi facilitado por falhas nas práticas de autenticação e segurança. 
     
   ### Amazon Prime Day (2018)
      - Durante o evento de vendas, o site da Amazon ficou fora do ar devido a um problema de desempenho que não suportou o alto volume de tráfego.