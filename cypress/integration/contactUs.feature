Feature: Envio de mensaje de contacto

    Yo como
        usuario de la página AdvantageDemo
    Quiero
        enviar un mensaje
    Para    
        solicitar informacion acerca de las promociones
    Para    
        y asi estar al tanto de los precios especiales

    Background: Acceder a pagina de inicio
        Given Accedi a la pagina de inicio e hice scroll down hasta el final de la pagina

    @wip @happyFlow 
    Scenario: Envio exitoso de mensaje 
        When Ingreso correctamente todos los datos solicitados en la seccion de contacto
            And Hago clic en el boton SEND
        Then Se mostrara un mensaje de confirmacion 


    
    @Outline
    Scenario Outline: Envio con datos errados
        When Ingreso solo los datos errados en el campo Email y en el campo Subject de la seccion de contacto
                    | Email              | Subject     |  
                    | email@noexiste.com | 47665334532 |    
                    | ergbf              | hols        |
                    | 12345-             | dsfs        |  
            And Hago clic en el boton SEND 
        Then No se mostrara un mensaje de confirmacion 
        

