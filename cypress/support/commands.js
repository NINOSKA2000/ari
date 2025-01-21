// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password, expectedUserData) => {
    // Visita la página de login
    cy.visit('/login');
  
    // Verifica que la URL sea la de login antes de proceder
    cy.url().should('include', '/login');
  
    // Espera que el formulario se cargue correctamente, usando un timeout mayor si es necesario
    cy.get('[test-id=form-login]', { timeout: 10000 }).should('be.visible');
  
    // Simula el ingreso de credenciales usando test-id
    cy.get('[test-id=form-login]') 
      .within(() => {
        cy.get('#corporateEmail').type(email);  
        cy.get('#password').type(password);  
      });
  
    // Simula el clic en el botón de login
    cy.get('[test-id=button-login]').click();
 
  

  });
  
  

  Cypress.Commands.add('searchAndVerify', (textSearch) => {
    // Verifica que el campo de búsqueda esté visible
    cy.get('.searchButton input[type="text"]')
      .should('exist')
      .and('be.visible');
  
    // Escribe el texto en el campo de búsqueda
    cy.get('.searchButton input[type="text"]').clear().type(textSearch);
  
    // Verifica que los resultados se actualicen y contengan el texto buscado
    cy.get('.products_cards ul li:visible', { timeout: 10000 })
      .should('have.length', 1)
      .and('contain.text', textSearch);
  });
  
  
  