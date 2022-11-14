// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//     // const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
//     const screenshot = `FAILED-${Cypress.spec.name}.png`;
//     addContext({ test }, screenshot);
//   }
// });

afterEach(() => {
    const screenshotsFolder = Cypress.config("screenshotsFolder"); // Obtiene path de screenshots desde cypress.json
    if (window.cucumberJson?.generate) {
        const testState = window.testState;
        const stepResult = testState.runTests[testState.currentScenario.name][testState.currentStep];
        if (stepResult?.status === "failed") {
            const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`; // Nombre de screenshot failed
            cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,"base64").then((imgData) => {
                stepResult.attachment = {
                    data: imgData,
                    media: { type: "image/png" },
                    index: testState.currentStep,
                    testCase: testState.formatTestCase(testState.currentScenario),
                };
            });
        }
    }
});

after(() => {
    cy.wait(2000).exec('npm run cy:html', { failOnNonZeroExit: false }); // Generar reporte html
});
