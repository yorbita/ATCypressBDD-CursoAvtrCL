import { Given, When, Then, And, But } from "cypress-cucumber-preprocessor/steps"

// Pages Objects
import { ContactUsPage } from "../../pages/contactUs/contactUs.actions"
const contact: ContactUsPage = new ContactUsPage()

import { ContactUsLocators } from "../../pages/contactUs/contactUs.locator" // Importación de la clase de localizadores 
const contactLocator: ContactUsLocators = new ContactUsLocators() // Instancia de la clase en la variable 


 
// Crear variable DATA de tipo any para no casarmme con ningún tipo de dato, 
// pasarle todas las propiedades del json del fixture
let DATA: any;

// promesa
before(() => {      
    cy.fixture('advantageDemo').then((json) => {
        DATA = json       
    }) 
}); 


Given ('Accedi a la pagina de inicio e hice scroll down hasta el final de la pagina', () => {
    contact.accederUrl(DATA.url);
    contact.scrollDown();
})


When ('Ingreso correctamente todos los datos solicitados en la seccion de contacto', () => {
    contact.seleccionarCategory(DATA.category);
    contact.seleccionarItem();
    contact.escribirEmail(DATA.contactEmail);
    contact.escribirSubject(DATA.contactSubject);
})


And ('Hago clic en el boton SEND', () => {
    contact.selectSend();
})

Then ('Se mostrara un mensaje de confirmacion', () => {
    contact.AssertContactConfirm();
})

