// describe('Validate the login functionality', () => {
//     //1St Way =>baseUrl set into cypress.json module and we read it from testcase
//     it('Setting up the base url', () => {
//         //     cy.visit('/contact-sales/') //by using this we directly navigate to contact-sales page of orangehrm website
//         // })

//         it('Example of Baseurl', () => {
//             let url = Cypress.config().baseUrl //accesing baseUrl
//             cy.visit(url) //passing url value to cy.visit()
//         })   
//     })
// })

//==========================================================================================
describe('Validate the login functionality', () => {
    it('Example of Baseurl', () => {
        let url = Cypress.config().baseUrl //accesing baseUrl
        cy.visit(url) //passing url value to cy.visit()
        cy.visit('www.google.com')

    })
})
/* NOTE=>Above code (15 line to 20 line)gives error as  ""> Unexpected token ':'" cause frontend developer aleady write the code and we doing some changes with there code so to handle this
We need to add below code in support >index.js file

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  }) */


//Basically we add baseURL in cypress.json as we override this url from command line so for that commant are as below//
//1.(For ex. for local i set this command ) npx cypress open --config baseUrl="https://www.redbus.com/"
//2. (for ex. for staging i set this commad) npx cypress open --config baseUrl="https://www.facebook.com/"
//3. (for ex. for canary i set this commad) npx cypress open --config baseUrl="https://www.instagram.com/"
//4. (for ex. for producton i set this commad) npx cypress open --config baseUrl="https://www.reddif.com/"
//5. npx cypress open --config defaultCommandTimeout="10000"
//TO SET VARIABLE FOR COMMEND IN PACKAGE .JSON =>"staging": "npx cypress open --config baseUrl=https://www.redbus.com/"


//npx cypress open --config baseUrl="https://www.reddif.com/", userName="Ganesha"

//and we cant remember that commad so create one varialbe in package.json and assign that comment to it and reun only=> npm run varialbename


//============================================================================================


//2 WAY 
//npx cypress run --config-file staging-config.json


// describe('Validate the login functionality', () => {
//     it('Example of Baseurl', () => {
//         let url = Cypress.config().baseUrl //accesing baseUrl
//         cy.visit(url) //passing url value to cy.visit()

//     })
// })

// describe('Validate the login functionality', () => {
//     it('Example of Baseurl', () => {
//         let name = Cypress.config().userName //accesing baseUrl
//         cy.log(name) //passing url value to cy.visit()

//     })
// })


//================================================================================================================

//3 WAY:
//We are creating one file in support folder in that we declaring class inside class there is method and by creatong object of thet method in integreation flder js file we invoke that method 

/* "produtility":"npx cypress open  --env ENV=production",
"stagutility":"npx cypress open  --env ENV=staging",
"localutility":"npx cypress open  --env ENV=local" */

//my.spec.ts

//Import Utility from support folder
import { Utility } from "../../support/utility"

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();


describe('Verify Environment Config' + url, () => {
    it('Verify Environment', () => {
        cy.visit(url); //use url variable

        cy.log(Cypress.env('username'))
        cy.log(Cypress.env('password'))
    });
});


//snpx cypress open--env ENV = 'staging', username = 'mayuri', password = 'mayuri123'

//npx cypress run  --env ENV="staging"

//npx cypress run --env ENV="staging", username="mayuri"

//"newenvpassword":"npx cypress open --env ENV=staging,username=admin222,password=mayuri"

//browserstack-cypress run --sync --env api_host=http://example.com,products_api_path=/api/v1/products.json