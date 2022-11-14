import { should } from "chai";
import { RegistroLocators } from "./registro.locator" // Importación de la clase de localizadores 
const registroLocator: RegistroLocators = new RegistroLocators(); // Instancia de la clase en la variable 



export class RegistroPage {

    accederUrlRegistro(url2?: any) {
        cy.visit(url2)
        cy.url().should('include', 'register')
            .wait(2000)

            //validar que el botón de registro es visible
        cy.get(registroLocator.registro.Register)
            .should('be.visible')
                .and('be.disabled')
                .and('have.class', 'invalid')

        cy.screenshot('IngresoURL')
    }

    escribirUsername (username?: any) {
        cy.get(registroLocator.registro.Username)
            .click()
            .wait(2000)
            .type(username)

            //validar aparicion label error
        cy.contains('CREATE ACCOUNT')
            .click()    
            .wait(500)
    }

    escribirEmail (email?: any) {
        cy.get(registroLocator.registro.Email)
            .click()
            .wait(2000)
            .type(email)
    }

    escribirPassword (password?: any) {
        cy.get(registroLocator.registro.Password)
            .click()
            .wait(2000)
            .type(password)
    }

    escribirConfirmPassword (password?: any) {
        cy.get(registroLocator.registro.ConfirmPassword)
            .click()
            .wait(2000)
            .type(password)
    }

    escribirFirstName (firstName?: any) {
        cy.get(registroLocator.registro.FirstName)
            .click()
            .wait(2000)
            .type(firstName)
    }

    escribirLastName (lastName?: any) {
        cy.get(registroLocator.registro.LastName)
            .click()
            .wait(2000)
            .type(lastName)
    }

    escribirPhoneNumber (phoneNumber?: any) {
        cy.get(registroLocator.registro.PhoneNumber)
            .click()
            .wait(2000)
            .type(phoneNumber)
    }

    seleccionarCountry (country?: any) {
        cy.get(registroLocator.registro.Country)
            .wait(2000)
            .select('Chile')

        cy.get(registroLocator.registro.Country)
            .should('have.value', 'object:114')
    }

    escribirCity (city?: any) {
        cy.get(registroLocator.registro.City)
            .click()
            .wait(2000)
            .type(city)
    }

    escribirAddress (address?: any) {
        cy.get(registroLocator.registro.Address)
            .click()
            .wait(2000)
            .type(address)
    }

    escribirState (state?: any) {
        cy.get(registroLocator.registro.State)
            .click()
            .wait(2000)
            .type(state)

        cy.get(registroLocator.registro.State)
            .should('have.lengthOf.below', 10)
    }

    escribirPostalCode (postalCode?: any) {
        cy.get(registroLocator.registro.PostalCode)
            .click()
            .wait(2000)
            .type(postalCode)
    }

    deselectReceiveOffers () {
        cy.get(registroLocator.registro.ReceiveOffers)
            .click()
    }

    selectTermsAndConditions () {
        cy.get(registroLocator.registro.TermsAndConditions)
            .click()
    }

    selectRegister () {
        cy.get(registroLocator.registro.Register)
            .click()
            .wait(2000)
        cy.screenshot('Registro finalizado') 
    }

}