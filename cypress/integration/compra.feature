Feature: Flujo de carrito de compra

    Yo como
        usuario recurrente de la página AdvantageDemo
    Quiero
        ver el detalle de un producto antes de ingresarlo al parrito de compras
    Para    
        seleccionar el color y cantidad que deseo
    Para    
        mejorar mi experiencia de compra

    Background: Acceder a pagina de registro
        Given Accedi a la pagina de registro 


    @wip @happyFlow 
    Scenario: Seleccion de productos a carrito de compras
        When Selecciono la categoria de producto que me interesa
        Then Se mostrara el listado de productos correspondiente
        When Selecciono el producto que me interesa
        Then Se abrira la pagina con los detalles del producto seleccionado
        When Indico la cantidad de unidades que deseo
            And Selecciono el boton ADD TO CART 
        Then Debera mostrarse la notificacion de que se agrego el producto al carrito
        When Hago clic en el boton CHECK OUT de la notificacion
        Then Sere redirigido a una pantalla de inicio de sesion 
        When Introduzco los datos solicitados
            And Selecciono el boton LOGIN