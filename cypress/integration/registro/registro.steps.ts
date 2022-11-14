import { Given, When, Then, And, But } from "cypress-cucumber-preprocessor/steps"

// Pages Objects
import { RegistroPage } from "../../pages/registro/registro.actions"
const registro: RegistroPage = new RegistroPage()
 
// Crear variable DATA de tipo any para no casarmme con ningún tipo de dato, 
// pasarle todas las propiedades del json del fixture
let DATA: any;

// promesa
before(() => {
    cy.fixture('advantageDemo').then((json) => {
        DATA = json       
    }) 
});

// Registro exitoso de un usuario
Given ('Accedi a la pagina de registro', () => {
    registro.accederUrlRegistro(DATA.urlregis);
})

When ('Introduzco todos los datos solicitados', () => {
    registro.escribirUsername(DATA.username);
    registro.escribirEmail(DATA.email);
    registro.escribirPassword(DATA.password);
    registro.escribirConfirmPassword(DATA.password);
    registro.escribirFirstName(DATA.firstName);
    registro.escribirLastName(DATA.lastName);
    registro.escribirPhoneNumber(DATA.phoneNumber);
    registro.seleccionarCountry();
    registro.escribirCity(DATA.city);
    registro.escribirAddress(DATA.address);
    registro.escribirState(DATA.state);
    registro.escribirPostalCode(DATA.postalCode);
    registro.deselectReceiveOffers();
    registro.selectTermsAndConditions();
})

And ('Selecciono el boton REGISTER', () => {
    registro.selectRegister();
})

Then ('Debera mostrarse el usuario registrado exitosamente', () => {

})
