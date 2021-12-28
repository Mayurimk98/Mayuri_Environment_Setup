//utility.ts
export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://www.google.com"; //return desired url
        else if (envi == 'staging')
            return "https://www.facebook.com";
        else if (envi == 'local')
            return "http://www.instagram.com";
    }
}