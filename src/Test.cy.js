import Test from './Test.vue';

it('mounts', () => {
    cy.mount(Test);
    cy.get('h1').contains('Test');
});
