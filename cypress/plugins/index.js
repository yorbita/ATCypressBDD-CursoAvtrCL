/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

/**
 * @type {Cypress.PluginConfig}
 */

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript')
    }

    on('file:preprocessor', cucumber(options))
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}
