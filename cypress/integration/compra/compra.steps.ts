import { Given, When, Then, And, But } from "cypress-cucumber-preprocessor/steps"

// Pages Objects
import { CompraPage } from "../../pages/compra/compra.actions"
const compra: CompraPage = new CompraPage()
 
// Crear variable DATA de tipo any para no casarmme con ningún tipo de dato, 
// pasarle todas las propiedades del json del fixture
let DATA: any;

// promesa
before(() => {
    cy.fixture('advantageDemo').then((json) => {
        DATA = json       
    }) 
});

// Seleccion de productos a carrito de compras
Given ('Accedi a la pagina de registro', () => {
    compra.accederUrl(DATA.url);
})

When ('Selecciono la categoria de producto que me interesa', () => {
    compra.seleccionarCategory(DATA.compraCategoryLocators);
})

Then ('Se mostrara el listado de productos correspondiente', () => {

})

When ('Selecciono el producto que me interesa', () => {
    compra.seleccionarProducto();

})

Then ('Se abrira la pagina con los detalles del producto seleccionado', () => {
    compra.validarImagen();
    compra.validarBotonAddToCart();
    compra.validarEspecificaciones();
})

When ('Indico la cantidad de unidades que deseo', () => {
    compra.seleccionarCantidad();
})

And ('Selecciono el boton ADD TO CART', () => {
    compra.addToCart();
})

Then ('Debera mostrarse la notificacion de que se agrego el producto al carrito', () => {
    compra.validarPopUpCheckOut();
})

When ('Hago clic en el boton CHECK OUT de la notificacion', () => {
    compra.checkOut();
})

Then ('Sere redirigido a una pantalla de inicio de sesion', () => {
    compra.validarForgotPassword();
})

When ('Introduzco los datos solicitados', () => {
    compra.ingresarDatosLoginUser(DATA.username);
    compra.ingresarDatosLoginPass(DATA.password);


And ('Selecciono el boton LOGIN', () => {
    compra.ingresarDatosLoginBoton();
})

})
