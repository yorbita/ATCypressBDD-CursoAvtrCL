import { should } from "chai";
import { random } from "cypress/types/lodash";
import { ContactUsLocators } from "./contactUs.locator" // Importación de la clase de localizadores 
const contactLocator: ContactUsLocators = new ContactUsLocators() // Instancia de la clase en la variable 



export class ContactUsPage {

    accederUrl(url?: any) {
        cy.visit(url)
            .wait(2000)
    }

    scrollDown() {
        cy.scrollTo("bottom")
            .wait(2000)
    }

    seleccionarCategory (category?: any) {
        let random = Math.floor(Math.random() * category.length);
        cy.get(contactLocator.contact.Category)
            .select(random, {force: true})
    }

    seleccionarItem (item?: any) {
        cy.get(contactLocator.contact.Item)
        .wait(3000)
        .find('option')
        .its('length')
        .then((len) => {
            let random = Math.floor(Math.random() * len);

        cy.wait(5000)
        cy.get(contactLocator.contact.Item).select(random, {force: true})
        })
    }

    escribirEmail (contactEmail?: any) {
        cy.get(contactLocator.contact.Email)
            .click()
            .wait(2000)
            .type(contactEmail)
    }
  
    escribirSubject (subject?: any) {
        cy.get(contactLocator.contact.Subject)
            .click()
            .wait(2000)
            .type(subject)
    }

    selectSend () {
        cy.get(contactLocator.contact.Send)
            .wait(2000)
            .click({force: true})
            .screenshot('Contacto finalizado')
    }

    AssertContactConfirm () {
        cy.get(contactLocator.contact.ThankYou)
        .should('contain', 'Thank you for')
        .should('not.be.NaN')
        cy.get('#registerSuccessCover > .center')
        .should('contain', 'CONTINUE SHOPPING')
    }
}