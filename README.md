# 馃 AVATTAR FRAMEWORK CYPRESS-BDD 馃
# TEMPLATE INCIAL PARA AUTOMATIZACI脫N DE PRUEBAS FUNCIONALES

- Framework desarrollado por el equipo QAF-Automatizaci贸n para la construcci贸n y desarrollo de Pruebas Funcionales basado en Behavior-Driven Development (BDD), utilizando herramientas como:

  - Cypress.
  - Cucumber.
  - Gherkin.
  - Typescript.

- Utilice este framework y la arquitectura propuesta dentro de 茅l como base para desarrollar las Pruebas Funcionales y automatizar los flujos de Regresi贸n fundamentales de su aplicativo.

- Para ello, este repositorio contiene el template y arquetipo inicial para comenzar a automatizar directamente alineado a dicho framework y arquitectura propuesto anteriormente.

- El template cuenta con una automatizaci贸n de ejemplo para visualizar y demostrar la ejecuci贸n de Pruebas Funcionales a trav茅s de Cypress y BDD.

- Adicionalmente, cuenta con las configuraciones necesarias para la correcta ejecuci贸n de las pruebas en entornos de Integraci贸n y Despliegue Continuo (Pipeline - CI/CD - DevOps).

- Cualquier duda y/o inconveniente con el framework o el template, por favor comunicarse con:
  
  - **Juan Pablo Mu帽oz  |  juan.munoz@avattar.com**馃摡
  - **Elvis Pi帽a  |  elvis.pina@avattar.com**馃摡

## Tabla de Contenido

- [Instalaciones necesarias](#instalaciones-necesarias)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Iniciar el Template.](#iniciar-el-template)

## Instalaciones necesarias

Herramienta | Versi贸n | URL
:--- | :--- | :---
Node.js | ^14.0.0 | https://nodejs.org/es/
Git | ^2.3.0 | https://git-scm.com/
Angular CLI | ^12.0.0 | https://angular.io/cli
Typescript | ^4.0.0 | https://www.typescriptlang.org/
Visual Studio Code | ^1.6.7 | https://code.visualstudio.com/

## Estructura de carpetas

```
馃梻锔?---Cypress-Cucumber-Framework (v1.0.0)
    |
    |
    馃搧 --- assets
    |
    |
    馃搧 ---猸愶笍cypress猸愶笍
    |       |
    |       |
    |       |
    |       馃搧 --- downloads馃捑
    |       |       |
    |       |       鈥? __ Contiene/recibe archivos descargados del flujo automatizado.
    |       |
    |       馃搧 --- fixtures馃摐
    |       |       |
    |       |       鈥? __ Contiene ficheros json con datos para las pruebas (Data-Driven Testing)
    |       |
    |       馃搧 --- integration馃
    |       |       |
    |       |       鈥? __ Contiene los ficheros feature escritos en Gherkin/Cucumber y los steps definitions.
    |       |       鈥? __ Debe crear una carpeta que contenga los steps con el mismo nombre del feature.
    |       |
    |       馃搧 --- pages馃搫
    |       |       |
    |       |       鈥? __ Contiene los Pages Objects Model del flujo automatizado
    |       |
    |       馃搧 --- plugins鈿欙笍
    |       |       |
    |       |       鈥? __ Contiene archivos de configuraci贸n de Cypress (NO TOCAR)
    |       |
    |       馃搧 --- reports馃搳
    |       |       |
    |       |       鈥? __ Contiene/recibe todos los reportes generados de las pruebas automatizadas
    |       |
    |       馃搧 --- support鈿欙笍
    |               |
    |               鈥? __ Contiene archivos de configuraci贸n y comandos de Cypress (NO TOCAR)
    |
    |
    馃搩 --- .gitignore
    |
    |
    馃搩 --- .npmrc
    |
    |
    馃搩 --- cucumberReports.js (NO TOCAR)
    |
    |
    馃搩 --- cypress.env.json  (NO TOCAR)
    |
    |
    馃搩 --- cypress.json (NO TOCAR)
    |
    |
    馃搩 --- Dockerfile
    |
    |
    馃搩 --- Jenkinsfile
    |
    |
    馃搩 --- package.json
    |
    |
    馃搩 --- README.md
    |
    |
    馃搩 --- tsconfig.json
```

## Iniciar el Template.
- Para iniciar el tamplate del framework en su entorno de trabajo, siga las instrucciones indicadas:

### Clonar Repositorio y abrir el Template desde un IDE 馃梻锔? --> 馃捇
- Ejecute el siguiente comando en su terminal de preferencia (GIT BASH / Terminal CMD (Windows) / Terminal MacOsx , etc.) para clonar el template en su m谩quina local

      `git clone https://gitlab.com/avtr-templates/cypress/template-cypress-bdd-testing-framework-avtrcl`
      
- IMPORTANTE: En este punto debe ingresar a su IDE de trabajo (VScode, IntellijIDEA, Etc) y debe abrir el template recien clonada para comenzar a trabajar.

- Aperturar una terminal o la consola de comando en el IDE desde donde se ha abierto el template.

- PRE-REQUISITO: Quitar la referencia con el repositorio del template que ha clonado y abierto en su m谩quina, ya que luego deber谩 sincronizar la codificaci贸n de sus pruebas en un repositorio de Gitlab especifico para ello para su proyecto.
    - Si se encuentra en un entorno Windows realice lo indicado ejecuntando el siguiente comando:
      `del .git`
    - Si se encuentra en un entorno Macosx realice lo indicado ejecuntando el siguiente comando:
      `rm  -rf .git`

### Instalar dependencias de software 馃О鈿欙笍
- Ejecute el siguiente comando en su terminal ubicada en la carpeta del template clonado.
- Este comando permitir谩 el acceso a la descarga de los binarios de Cypress, que se alojar谩n en **C:\Users\idxxx\AppData\Local\Cypress\Cache\7.4.0** en el caso de Windows.

      `npm install`

### Ejecutar las Pruebas Automatizadas 鈻讹笍鈴猴笍
- El template contiene una automatizaci贸n de ejemplo escrita en Gherkin/Cucumber/Typescript para que pueda apreciar las caracter铆sticas principales de Cypress.
- Puede ejecutar las pruebas automatizadas a trav茅s de dos opciones:

  * `Opci贸n A --->` GUI Cypress Test Runner
  * `Opci贸n B --->` Cypress Console
    
#### Ejecutar Pruebas -> OPCION A:  GUI Cypress Test Runner (GIT BASH) 馃枼锔?
- Test Runner es una interfaz gr谩fica de usuario que utiliza Cypress para ejecutar casos de prueba automatizados.
- Esta opci贸n permitir谩 ver c贸mo se ejecutan las pruebas en tiempo real a trav茅s del navegador que se ha seleccioado.
- Mientras se ejecutan cada paso de los casos de prueba, Cypress permite monitorear la ejecuci贸n de los comandos en la aplicaci贸n bajo prueba.
- Para ejecutar las pruebas con esta opci贸n, se  debe lanzar el siguiente comando la su terminal que tiene abierta desde su IDE o de manera independiente desde GIT BASH / Terminal CMD / Terminal MacOsx

      `npm run cy:open`
  
#### Ejecutar Pruebas -> OPCION B: Cypress Console -- DevOps Headless Browsers 鈱笍
- Al Ejecutar con esta opci贸n, Cypress ejecutar谩 pruebas ocultando el navegador y sin la interfaz gr谩fica de usuario mencionada en la opci贸n anterior (A).
- En este caso el segumiento en tiempo real que se puede realizar para ver la informaci贸n y resultado de la ejecucion de las pruebas es a trav茅s de la terminal desde donde se ejecutado el comando que se informar谩 a contiuaci贸n.
- Esta es una forma r谩pida de ejecutar pruebas y conocer sus resultados.
- Para ejecutar las pruebas con esta opci贸n, se  debe lanzar el siguiente comando la su terminal que tiene abierta desde su IDE o de manera independiente desde GIT BASH / Terminal CMD / Terminal MacOsx.

      `npm run cy:test`

# HAPPY TESTING!馃И馃

