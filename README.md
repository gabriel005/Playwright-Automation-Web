## **Relatório de Teste Automatizado Utilizando Playwright e Cucumber**

Testes Automatizados com Playwright - SauceDemo

## **📌 Resumo**
Este projeto utiliza o Playwright para a automação de testes end-to-end no site SauceDemo. O objetivo é validar funcionalidades como login, navegação, adição de produtos ao carrinho e finalização de compra.

## **🖥️ Ambiente de Teste**
Sistema Operacional: Windows  
Linguagem: JavaScript  
Framework: Playwright  
URL do site: https://www.saucedemo.com  
Pipeline de Automação: CI/CD: GitHub Actions

## **🚀 Como Executar os Testes**
1️⃣ Instalação das Dependências  
Certifique-se de ter o Node.js instalado e execute:  
```sh 
npm install
```
```sh 
npm install --save-dev @cucumber/cucumber@11.0.0
```
```sh 
npx playwright install
```


## **2️⃣ Executando os Testes**
Para rodar todos os testes:
```sh 
npx cucumber-js --require src/tests/keywords/hooks.js --require src/tests/keywords src/tests/feature --tags "@site" --format json:cucumber_report.json 
```
Para gerar relatórios dos testes:
```sh 
node report.js
```


## **Detalhes dos Testes**
Os testes cobrem os seguintes cenários:

`1️⃣ Login:`  
Login válido (usuário e senha corretos)  
Login inválido (credenciais erradas)  
Bloqueio de usuário com conta bloqueada  

`2️⃣ Navegação e Produtos:`  
Verificação da listagem de produtos  
Ordenação de produtos  
Acesso à página de detalhes de um produto  

`3️⃣ Carrinho de Compras:`  
Adição de produtos do carrinho  
Remoção de produtos do carrinho  

`4️⃣ Checkout:`    
Validação de erro ao tentar finalizar sem preencher os campos obrigatórios  
Finalização da compra com sucesso  

## **📌 Considerações Finais**
Este repositório pode ser expandido para incluir mais cenários e integração com pipelines CI/CD para execução contínua dos testes  

![image](https://github.com/user-attachments/assets/140b21a5-0bf3-40a4-950c-980a2f5ba6da)

