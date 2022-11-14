const report = require("multiple-cucumber-html-reporter");

const APP = 'APP Demo';

report.generate({
  jsonDir: "cypress/reports/cucumber-json", // Path cucumber-json
  reportPath: "cypress/reports/html",

  pageTitle: "Cypress Cucumber HTML Reporter",
  reportName: APP,

  displayDuration: true,
  durationInMS: true,

  metadata: {
    browser: {
      name: "chrome",
      version: "102.0.5005.63",
    },

    device: "Local Machine",
    platform: {
      name: "windows",
      version: "10 Enterprise",
    },
  },

  // Por terminar
  customData: {
    title: 'Run information',
    data: [
        {label: 'Project', value: 'Custom project'},
        {label: 'Release', value: '1.2.3'},
        {label: 'Cycle', value: 'B11221.34321'},
        {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
        {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
    ]
  }

});
