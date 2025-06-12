# Frutelo 🍓

Frutelo é uma aplicação inspirada no modelo do iFood, com foco em hortifrúti.

## Alunos 
- Lucas Gean Batista Jacobina Airton        UC24101143
- Igor Prado Sudo                           UC24101439   
- Mariana Urani Barros                      UC24101542
- Leticia Ximenes Parreiras                 UC24103043
- Murilo Fortunato Laurindo Silva           UC24101258
- Gustavo Henrique de Oliveira Teles        UC24100241

## 🚀 Como instalar o projeto

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/LeticiaParreiras/Frutelo
cd Frutelo
```
Em seguida, instale as dependências tanto no backend quanto no frontend:

```bash
cd backend
npm install

cd ../frontend
npm install
```
⚠️ Obs: o frontend ainda está em fase inicial e não foi implementado.

# 🏃‍♀️ Como executar o backend
No diretório backend, execute o servidor em modo desenvolvimento:

```bash
npm run start:dev
```
# 📫 Como testar a API
Você pode testar a API de duas formas:

## Via Swagger

Acesse no navegador:

http://localhost:3000/api

Lá você encontra a documentação interativa da API.

## Via arquivo .http

Instale a extensão Rest Client no VSCode, abra o arquivo .http presente no projeto e envie as requisições diretamente.

### 📌 Observações
A API utiliza autenticação via JWT. Para acessar rotas protegidas, é necessário gerar e usar um token válido.
