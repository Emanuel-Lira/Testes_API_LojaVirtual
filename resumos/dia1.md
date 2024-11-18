# Dia 1

TESTES MANUAIS X TESTES AUTOMATIZADOS

TESTES MANUAIS

- LENTOS

TESTES AUTOMATIZADOS

- MAIS SEGURANÇA PARA EVOLUIR APLICAÇÃO

**AMBOS SÃO IMPORTANTES:**

**TESTES AUTOMATIZADOS** VÃO GARANTIR QUE AQUELES ROTEIROS VÃO SE REPETIR A CADA COMMIT E GARANTIR QUE AQUILO ESTA FUNCIONANDO 

**TESTES MANUAIS** VOCE FICA LIVRE PARA CRIAR ESTRATEGIAS E NAVEGAR NA APLICAÇÃO 

O QUE MAIS EU POSSO TESTAR PARA TRAZER MAIS SEGURANÇA PARA A APLICAÇÃO?

“”se os testes forem julgados pela quantidade de vezes que são realizados, automação ganhará sempre. Se o julgamento for baseado na qualidade dos testes executados, os manuais levam alguma vantagem”   - james wittaker

**ROTEIRO X EXPLORATORIOS**

testes ad hoc é uma ma pratica → sem planejamento → minimo entendimento

testes exploratorios → exige um grau de conhecimento → falta de tempo → pouca documentação

teste de regressão → abre a abordagem de testes exploratorios → cada incremento eu garanto que o resto funciona

Roteiro 

- testes baseados em um roteiro
- passos bem definidos
- Planejamento se da na criação dos roteiros
- previne erros

Exploratorio

- navegar pela aplicação sem uma rota definida
- apenas direcionamento inicial
- planejamento se da durante a execução do teste
- encontra erros

**automação em testes manuais**

- automação de massas de dados
- buscar uma informação
- chegar em determinado ponto da aplicação

“use automação para as atividades que o computador é bom (tarefas repetitivas) e use humanos para o que nos somos bons (ver, pensar e lindar)

GERENCIAMENTO DE MASSA DE DADOS

garantir que o ambiente esteja de acordo com oq estava esperando

Entrada + ação = resultado

Resultado Esperado

Resultado obtido

PLANEJAMENTO DE TESTES

caso de teste > AQUI > ??

**O QUE, COMO, POR QUE?**

Crie sessoes com tempo pre determinado

Evite distrações

**COMO** UM USUARIO/PAPEL/PERFIL

**QUE** QUERO FAZER ALGO

**PARA** ATINGIR UM OBJETIVO

**EXPLORAR** UMA FUNCIONALIDADE

**COM** ALGUMA ESTRATEGIA

**PARA** DESCOBRIR ALGUMA COISA

FREESTYLE TESTE

pega a aplicação e se vira

card inicial → explorar a aplicação →  com navegação livre → para descobrir as principais funcionalidades

BASEADO EM CENARIOS

Caso de uso → fazer algumas variações → fluxos alternativos 

adicionar passos

remover passos

alterar passos

repetir passos

substituir passos

executar igual, mas diferente…


novos testes

selecionar mais de 1 item → fe1

confirmar compra sem item

BASEADO EM FEEDBACKS

- Densidade de erros reportados
- priorização do especialista
- criticidade de cenarios
- cobertura

BASEADO EM TECNICAS

**erro pode estar tanto na aplicação quanto no teste**

CLASSE DE EQUIVALENCIA

vai tentar mapear um conteudo infinito em um finito de possibilidade

VALOR LIMITE 


Exercicio: 

D


Transição de estados

modulo de testes pode ser mapeado como se fosse uma maquina de estados

- numero finito de estados
- que ação leva a cada estado


se eu estou no estado 1 e executar a ação 1 OBRIGATORIAMENTE tenho que ir para o estado 2

**EXERCICIO:**
A


TABELA DE DECISÃO:

vai ajudar quando quer combinar varias regras em um ponto so

quando fica mto extenso é preciso desenhar

**quantidade de colunas é 2 elevado ao numero de condições**


**4 cenarios possiveis, mas so 2 resultados possiveis**


SIMPLIFICAR A TABELA

ARRAY ORTOGONAL:

consiste em tentar reduzir um conjunto maior em um conjunto muito menor

- utilização de ferramenta (SQA mate tools)

PERSONAS

- dar um nome de facil relação com o perfil
- criar um breve background (contextualização/historico)
- levantar um conjunto de caracteristicas
- anexar uma fotografia ajuda a fixar melhor
- mapear os habitos e necessidades da persona e como ela poderia interagir com o sistema

SOAP OPERA TESTING

cenarios improvaveis são possiveis

“Assim como novelas, esses testes sao exagerados em termos de atividades e condensados em termos de tempo”

- testes devem ser engraçados e agressivos
- escreva cenarios improvaveis, mas possiveis
- escreva cenarios exagerados e condensados
- possue fase de design e execução separadas

HISTORIA BIZARRA E IMPROVAVEL



- aluguel de um carro
- estendendo prazo do aluguel
- upgrade de categoria (durante um aluguel)
- cadastro de sinistros (roubo)
- Entrega de carro reserva
- Recolhimento de carro reserva
- cancelamento de sinistro
- devolução de carro com problemas

TOURS

- planeja oq deve acontecer
    - quantas horas em cada atração
- ou
- so tem a passagem de ida

testes exploratorios sem uma boa estrategia é como um turista vagando por uma cidade em busca de boas atrações

quando voce volta em uma cidade:

- vai repetir os mesmos lugares
- ou
- conhecer novos lugares

SHOE TEST

- pegar um sapato e espancar um teclado - algumas aplicações trazem um comportamento estranho quando aperta varias teclas de uma vez

NULL, ZERO, VAZIO

- Tentar entrada em formularios com tudo que for possivel

BOOKMARK

- Quando voce navega na aplicação e depois tenta acessar uma pagina diretamente pelo link
- guardar url do meio da aplicação e tentar acessa-la diretamente

SABOTAGE

- entender o funcionamento da aplicação e retirar as dependencias
- precisa ter acesso a infraestrutura
- derrubar banco de dados (tratamento mais amigavel)
- exemplo netflix
    - agente que fica rodando na produção e as vezes tira um servidor do ar

FERRAMENTAS DO DESENVOLVEDOR (inspencionar)

- elementos - acesso ao html
- console - quando a aplicação lançar um erro

REQUISIÇÕES

- analisar todas as requisições que o browser fez
- tempo que levou

RESPONSIVIDADE

- Adequação dos elementos independente do tamanho da tela
- simulador de dispositivos no inspencionar

ACESSIBILIDADE

- lighthouse
- gerar report
- não precisa ter uma necessidade especial
- não perceber a leve diferença de cores

SEGURANÇA

- como proteger a aplicação de ataques
- tentar burlar as regras que a gente impôs
- tentar sql injection
- injetar javaScript no codigo

BANCO DE DADOS

- limites de cada campo
    - tamanho do HD
    - campo NOME que aceita 30 caracteres
    - feedback de quantos caracteres restam
    - barrar quando chegar no maximo

