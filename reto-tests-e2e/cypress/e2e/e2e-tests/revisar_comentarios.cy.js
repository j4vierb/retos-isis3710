/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('youtube example', () => {
  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  })

  it('Los comentarios se pueden visualizar en Youtube', () => {
    cy.visit('https://www.youtube.com/watch?v=LjbNtw14TwI');
  
    // Espera a que el video y la página carguen completamente
    cy.wait(5000);
  
    // Scroll hasta que aparezca el contenedor de comentarios
    cy.scrollTo('bottom', { duration: 2000 });
  
    // Espera un poco para que se carguen los comentarios
    cy.wait(5000);
  
    // Verifica que el contenedor de comentarios esté visible
    cy.get('ytd-comments#comments').should('be.visible');
  });
})
