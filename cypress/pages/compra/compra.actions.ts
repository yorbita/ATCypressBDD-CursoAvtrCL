import { should } from "chai";
import { compact } from "cypress/types/lodash";
import { CompraLocators } from "./compra.locator" // Importación de la clase de localizadores 
const compraLocator: CompraLocators = new CompraLocators(); // Instancia de la clase en la variable 


export class CompraPage {

    accederUrl(url?: any) {
        cy.visit(url)
            .wait(2000)
    }

    seleccionarCategory (category?: any) {
        cy.get(compraLocator.compraCategory.Speakers)
            .click()
            .wait(2000)
    }

    seleccionarProducto (producto?: any) {
        cy.get(compraLocator.compraCategoryProducts.Product1Price)
            .should('not.be.empty')
            .wait(2000)

        cy.get(compraLocator.compraCategoryProducts.Product1)
            .click()
            .wait(2000)

    }   

    validarImagen () {
        cy.get(compraLocator.compraCategoryProducts.ProductImg)
            .should('be.visible')
    }

    validarBotonAddToCart () {
        expect(compraLocator.BotonAddToCart).to.exist  
    }

    validarEspecificaciones () {
        cy.get(compraLocator.compraCategoryProducts.ProductGeneral)
            .should('contain.text', 'PRODUCT SPECIFICATIONS')  
    }

    seleccionarCantidad (cantidad?: any) {       
        cy.get(compraLocator.compraCategoryProductsCantidad.Numero)
            .click({force: true})
            .type('3')
            .wait(2000)
    }

    addToCart () {       
        cy.get(compraLocator.BotonAddToCart)
            .click({force: true})
            .wait(3000)
    }

    validarPopUpCheckOut () {
        expect(compraLocator.PopUp).to.be.calledOn
    }

    checkOut () {       
        cy.get(compraLocator.BotonCheckOutCart)
            .click()
            .wait(3000)
    }    

    validarForgotPassword () {
        cy.get(compraLocator.LogInCompra.ForgotPassword)
            .should('not.be.hidden')
    }

    ingresarDatosLoginUser (username?: any) {
        cy.get(compraLocator.LogInCompra.Userame)
            .click()
            .wait(2000)
            .type(username)
    }

    ingresarDatosLoginPass (password?: any) {
        cy.get(compraLocator.LogInCompra.Password)
            .click()
            .wait(2000)
            .type(password)
    }

    ingresarDatosLoginBoton () {
        cy.get(compraLocator.LogInCompra.Boton)
            .wait(2000)
            .click()
            .screenshot('Compra finalizada')
    }

}



