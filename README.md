# 🤖 AVATTAR FRAMEWORK CYPRESS-BDD 🥒
# TEMPLATE INCIAL PARA AUTOMATIZACIÓN DE PRUEBAS FUNCIONALES

- Framework desarrollado por el equipo QAF-Automatización para la construcción y desarrollo de Pruebas Funcionales basado en Behavior-Driven Development (BDD), utilizando herramientas como:

  - Cypress.
  - Cucumber.
  - Gherkin.
  - Typescript.

- Utilice este framework y la arquitectura propuesta dentro de él como base para desarrollar las Pruebas Funcionales y automatizar los flujos de Regresión fundamentales de su aplicativo.

- Para ello, este repositorio contiene el template y arquetipo inicial para comenzar a automatizar directamente alineado a dicho framework y arquitectura propuesto anteriormente.

- El template cuenta con una automatización de ejemplo para visualizar y demostrar la ejecución de Pruebas Funcionales a través de Cypress y BDD.

- Adicionalmente, cuenta con las configuraciones necesarias para la correcta ejecución de las pruebas en entornos de Integración y Despliegue Continuo (Pipeline - CI/CD - DevOps).

- Cualquier duda y/o inconveniente con el framework o el template, por favor comunicarse con:
  
  - **Juan Pablo Muñoz  |  juan.munoz@avattar.com**📩
  - **Elvis Piña  |  elvis.pina@avattar.com**📩

## Tabla de Contenido

- [Instalaciones necesarias](#instalaciones-necesarias)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Iniciar el Template.](#iniciar-el-template)

## Instalaciones necesarias

Herramienta | Versión | URL
:--- | :--- | :---
Node.js | ^14.0.0 | https://nodejs.org/es/
Git | ^2.3.0 | https://git-scm.com/
Angular CLI | ^12.0.0 | https://angular.io/cli
Typescript | ^4.0.0 | https://www.typescriptlang.org/
Visual Studio Code | ^1.6.7 | https://code.visualstudio.com/

## Estructura de carpetas

```
🗂️---Cypress-Cucumber-Framework (v1.0.0)
    |
    |
    📁 --- assets
    |
    |
    📁 ---⭐️cypress⭐️
    |       |
    |       |
    |       |
    |       📁 --- downloads💾
    |       |       |
    |       |       • __ Contiene/recibe archivos descargados del flujo automatizado.
    |       |
    |       📁 --- fixtures📜
    |       |       |
    |       |       • __ Contiene ficheros json con datos para las pruebas (Data-Driven Testing)
    |       |
    |       📁 --- integration🥒
    |       |       |
    |       |       • __ Contiene los ficheros feature escritos en Gherkin/Cucumber y los steps definitions.
    |       |       • __ Debe crear una carpeta que contenga los steps con el mismo nombre del feature.
    |       |
    |       📁 --- pages📄
    |       |       |
    |       |       • __ Contiene los Pages Objects Model del flujo automatizado
    |       |
    |       📁 --- plugins⚙️
    |       |       |
    |       |       • __ Contiene archivos de configuración de Cypress (NO TOCAR)
    |       |
    |       📁 --- reports📊
    |       |       |
    |       |       • __ Contiene/recibe todos los reportes generados de las pruebas automatizadas
    |       |
    |       📁 --- support⚙️
    |               |
    |               • __ Contiene archivos de configuración y comandos de Cypress (NO TOCAR)
    |
    |
    📃 --- .gitignore
    |
    |
    📃 --- .npmrc
    |
    |
    📃 --- cucumberReports.js (NO TOCAR)
    |
    |
    📃 --- cypress.env.json  (NO TOCAR)
    |
    |
    📃 --- cypress.json (NO TOCAR)
    |
    |
    📃 --- Dockerfile
    |
    |
    📃 --- Jenkinsfile
    |
    |
    📃 --- package.json
    |
    |
    📃 --- README.md
    |
    |
    📃 --- tsconfig.json
```

## Iniciar el Template.
- Para iniciar el tamplate del framework en su entorno de trabajo, siga las instrucciones indicadas:

### Clonar Repositorio y abrir el Template desde un IDE 🗂️ --> 💻
- Ejecute el siguiente comando en su terminal de preferencia (GIT BASH / Terminal CMD (Windows) / Terminal MacOsx , etc.) para clonar el template en su máquina local

      `git clone https://gitlab.com/avtr-templates/cypress/template-cypress-bdd-testing-framework-avtrcl`
      
- IMPORTANTE: En este punto debe ingresar a su IDE de trabajo (VScode, IntellijIDEA, Etc) y debe abrir el template recien clonada para comenzar a trabajar.

- Aperturar una terminal o la consola de comando en el IDE desde donde se ha abierto el template.

- PRE-REQUISITO: Quitar la referencia con el repositorio del template que ha clonado y abierto en su máquina, ya que luego deberá sincronizar la codificación de sus pruebas en un repositorio de Gitlab especifico para ello para su proyecto.
    - Si se encuentra en un entorno Windows realice lo indicado ejecuntando el siguiente comando:
      `del .git`
    - Si se encuentra en un entorno Macosx realice lo indicado ejecuntando el siguiente comando:
      `rm  -rf .git`

### Instalar dependencias de software 🧰⚙️
- Ejecute el siguiente comando en su terminal ubicada en la carpeta del template clonado.
- Este comando permitirá el acceso a la descarga de los binarios de Cypress, que se alojarán en **C:\Users\idxxx\AppData\Local\Cypress\Cache\7.4.0** en el caso de Windows.

      `npm install`

### Ejecutar las Pruebas Automatizadas ▶️⏺️
- El template contiene una automatización de ejemplo escrita en Gherkin/Cucumber/Typescript para que pueda apreciar las características principales de Cypress.
- Puede ejecutar las pruebas automatizadas a través de dos opciones:

  * `Opción A --->` GUI Cypress Test Runner
  * `Opción B --->` Cypress Console
    
#### Ejecutar Pruebas -> OPCION A:  GUI Cypress Test Runner (GIT BASH) 🖥️
- Test Runner es una interfaz gráfica de usuario que utiliza Cypress para ejecutar casos de prueba automatizados.
- Esta opción permitirá ver cómo se ejecutan las pruebas en tiempo real a través del navegador que se ha seleccioado.
- Mientras se ejecutan cada paso de los casos de prueba, Cypress permite monitorear la ejecución de los comandos en la aplicación bajo prueba.
- Para ejecutar las pruebas con esta opción, se  debe lanzar el siguiente comando la su terminal que tiene abierta desde su IDE o de manera independiente desde GIT BASH / Terminal CMD / Terminal MacOsx

      `npm run cy:open`
  
#### Ejecutar Pruebas -> OPCION B: Cypress Console -- DevOps Headless Browsers ⌨️
- Al Ejecutar con esta opción, Cypress ejecutará pruebas ocultando el navegador y sin la interfaz gráfica de usuario mencionada en la opción anterior (A).
- En este caso el segumiento en tiempo real que se puede realizar para ver la información y resultado de la ejecucion de las pruebas es a través de la terminal desde donde se ejecutado el comando que se informará a contiuación.
- Esta es una forma rápida de ejecutar pruebas y conocer sus resultados.
- Para ejecutar las pruebas con esta opción, se  debe lanzar el siguiente comando la su terminal que tiene abierta desde su IDE o de manera independiente desde GIT BASH / Terminal CMD / Terminal MacOsx.

      `npm run cy:test`

# HAPPY TESTING!🧪🦾

