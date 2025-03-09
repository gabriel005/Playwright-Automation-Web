## **Automated Testing Using Playwright and Cucumber**

Automated Tests with Playwright - SauceDemo  

## **📌 Summary**
This project uses Playwright for end-to-end test automation on the SauceDemo website. The goal is to validate functionalities such as login, navigation, adding products to the cart, and completing a purchase.  

## **🖥️ Test Environment**
Operating System: Windows  
Language: JavaScript  
Framework: Playwright  
Website URL: https://www.saucedemo.com  
Automation Pipeline: CI/CD with GitHub Actions  

## **🚀 How to Run the Tests**
1️⃣ Installing Dependencies  
Make sure you have Node.js installed, then run:  
```sh 
npm install
```
```sh 
npm install --save-dev @cucumber/cucumber@11.0.0
```
```sh 
npx playwright install
```


## **2️⃣ Running the Tests**
To run all tests:  
```sh 
npx cucumber-js --require src/tests/keywords/hooks.js --require src/tests/keywords src/tests/feature --tags "@site" --format json:cucumber_report.json 
```
To generate test reports:  
```sh 
node report.js
```


## **Test Details**
The tests cover the following scenarios:

`1️⃣ Login:`  
Valid login (correct username and password)  
Invalid login (incorrect credentials)  
Blocked user account login  

`2️⃣ Navigation & Products:`  
Product listing verification  
Product sorting  
Accessing a product detail page  

`3️⃣ Shopping Cart:`  
Adding products to the cart  
Removing products from the cart   

`4️⃣ Checkout:`    
Error validation when trying to complete a purchase without filling in the required fields  
Successful purchase completion  

## **Test Report**
The tests cover the following scenarios:  
![image](https://github.com/user-attachments/assets/4fb95f3b-71a7-416c-9c98-c007ee1cda20)  

  
## **📌 Final Considerations**
This repository can be expanded to include more scenarios and has integration with a CI/CD pipeline in GitHub Actions for continuous test execution.  
   

