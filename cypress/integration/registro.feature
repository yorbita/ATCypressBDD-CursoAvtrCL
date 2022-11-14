Feature: Registro de usuario

    Yo como
        usuario de la pagina AdvantageDemo
    Quiero
        un espacio
    Para    
        registrarme
    Para    
        obtener un usuario e ingresar a mi pagina virtual

    Background: Acceder a pagina de registro
        Given Accedi a la pagina de registro 


    @wip @happyFlow 
    Scenario: Registro exitoso de un usuario
        When Introduzco todos los datos solicitados
            And Selecciono el boton REGISTER
        Then Debera mostrarse el usuario registrado exitosamente

#     @regressionTest
#     Scenario: Registro fallido de un
#         When Introduzco solo dos campos obligatorios
#             And Selecciono el botón REGISTER
#         Then Deberá mostrarse el botón REGISTER deshabilitado

#     @smokeTest
#     Scenario Outline: Registro de usuarios con solo datos obligatorios
#         When Introduzco los datos solo en los campos obligatorios <Username> <Email> <Password>
#             And Selecciono el botón REGISTER
#         Then Deberá mostrarse el usuario registrado exitosamente

# Examples:
#     | Username  | Email                 | Password |
#     | Ruth      | Ruth@avattar.com      | 1234     |
#     | Yorbelys  | Yorbelys@avattar.com  | 4321     |
#     | Diego     | Diego@avattar.com     | 2341     |

