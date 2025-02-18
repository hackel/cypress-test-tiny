import { createBootstrap } from 'bootstrap-vue-next';
import { mount } from 'cypress/vue';

Cypress.Commands.add('mount', (component, options = {}) => {
    options.global = options.global || {};
    options.global.plugins = options.global.plugins || [];

    options.global.plugins.push(
        createBootstrap(),
    );

    return mount(component, options);
});
