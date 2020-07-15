# Telzir - FaleMais

Projeto de processo seletivo.

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

## Visualização Online

[Link do projeto no ar](https://telzir-5785d.web.app/) - Hospedado no firebase.

Site Responsivo

Como a API está hospedada no Heroku no plano gratuito, quando fica inativo por um tempo ele desliga a aplicação, sendo assim adicionei uma função para dentro do horário comercial aos dias de semana para disparar uma requisição para API que está no Heroku não dormir, e fazendo com que a experiência do avaliador seja ruim pelos dados não serem carregados no momento da visualização, em todo caso, se isso ocorrer, basta dar um refresh na página e aguar alguns segundos para o Heroku irá iniciar a API novamente. (hospedagem gratuita dá nisso...rs)

## Uso

Rodar "npm install" ou "yarn add" para instalar os módulos.
Para executar o aplicativo "yarn start"

## Teste

Para rodar o teste, executar "yarn test"

## Dados da API

Todas os dados dos planos e preços são carregados diretamente da API [Repositório Git](https://github.com/vandercbl/telzir-api) que está hospedada online no Heroku (plano gratuito)

## Área Administrativa

É possível incluir e excluir valores das chamadas DDD.
Para acessar - login: teste@teste.com / senha: 987654

## Recursos Utilizados

- React
- Redux Toolkit
- Styled Components
- Axios
- Formik
- Yup
- React Router Dom
- Jest (para teste)
