# 📋 Desenvolvimento do Projeto

Este documento reúne informações importantes sobre o planejamento, metodologia e desafios enfrentados durante o desenvolvimento da aplicação.

---

## 🗂️ Planejamento do Projeto

Este é um projeto que eu comecei a desenvolver no início dos meus estudos, há alguns anos. Conforme fui aprendendo novas tecnologias, fui incrementando neste projeto. Ele tem o objetivo de ser um projeto completo, que transpareça o meu conhecimento de uma perspectiva geral, abordando o máximo de tecnologias possível.

Para a dockerização do projeto, estruturei as características de cada componente do projeto (back-end, front-end e database) para que eu pudesse construir os Dockerfile da maneira mais precisa possível. Além disso, alinhei as características no docker-compose.yml para que a build dos containers fosse precisa e certeira.

---

## 📅 Quantidade de Sprints Utilizadas

A partir do início da dockerização dessa aplicação, apenas algumas sprints foram necessárias para a conclusão do projeto. Em 3 sprints, pude dividir as demandas e atribuir cada frente do projeto de maneira organizada.

Dessa forma, pude tratar a dockerização do frontend na primeira sprint, e por ser algo mais suave para representar e estabelecer no docker-compose.yml, aproveitei para testar os comandos e subir o container, fazendo ajustes no meu Docker Desktop para que comporte o projeto adequadamente.

---

## ⏳ Duração das Sprints

Reservei o período de um dia para cada sprint. Dessa forma, pude trabalhar no projeto de maneira leve e tranquila, concedendo a devida atenção e foco em cada etapa do processo.

Uma vez que tive o privilégio de atuar em projetos anteriores com Docker e Kubernetes, precisei fazer alguns ajustes no meu Docker Desktop, para que eu pudesse fazer o login corretamente e usar os comandos.

---

## 📈 Metodologia Ágil Utilizada

Apesar de reunir alguns conhecimentos em Scrum, a organização e projeção das etapas para esse projeto foi feita de maneira muito simples.

Reservando os 3 dias para tratar de cada etapa do processo, não foi necessário mergulhar de forma muito profunda nos conceitos de Scrum ou qualquer outra metodologia ágil.

Porém, conhecendo um pouco dessa metodologia, naturalmente o processo se enviesou para uma estrutura semelhante ao das sprints do Scrum. Revisões foram feitas para concluir cada etapa do processo.

---

## 🛠️ Ferramentas Utilizadas

Sendo este um projeto individual, não foi necessária a utilização de uma ferramenta de gerenciamento popular como o Trello ou Jira.

Apenas deixar anotado em um bloco de notas um resumo de cada etapa foi suficiente.

---

## ⚠️ Desafios Enfrentados e Soluções Adotadas

Inicialmente, ao tentar fazer a conexão com a minha conta no Docker, enfrentei um problema extremamente cruel.

Fazia um bom tempo desde a última vez que usei a conexão com a conta, então quando o terminal me retornou mensagens de falha na conexão, demorei um pouco para descobrir a natureza do problema.

Ao tentar abrir meu Docker Desktop, enfrentei uma série de obstáculos que iam desde problemas na máquina (como a não abertura do projeto) até dificuldades de fazer o login na conta pelo terminal do VS Code.

A solução foi simples, mas trabalhosa: fui limpando a pasta `.docker` na minha máquina e reiniciando tudo, até que, ao executar o cmd como administrador, pude resetar os serviços do 'daemon'.

Isso foi suficiente para ressuscitar o Docker Desktop e, a partir daí, tudo fluiu com naturalidade.

---

**Guilherme Ramos**  
Estudante de Sistemas para Internet – UNIESP
