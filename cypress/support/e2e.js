// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// cypress/support/e2e.js

Cypress.on('uncaught:exception', (err) => {
    // Ignore specific known errors
    if (
        err.message.includes('Permissions check failed') ||
        err.message.includes("Failed to execute 'exitFullscreen' on 'Document'")
    ) {
        return false; // prevent the test from failing
    }
});
