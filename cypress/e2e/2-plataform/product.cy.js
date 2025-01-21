// /// <reference types="cypress" />
/*global cy*/

describe('Autocomplete and Search Functionality', () => {
  const email = 'natalia.espinoza@seidor.com';
  const password = 'Ninoska12$';

  before(() => {
    // Realiza el inicio de sesión una sola vez
    cy.login(email, password);

    // Verifica que se redirija a la página esperada
    cy.url({ timeout: 20000 }).should('include', '/product');
  });


  it('Search products of the company"', () => {
    // Verifica que el campo Autocomplete esté visible
    cy.get('.products_empresa .box-empresa input').should('exist').and('be.visible');

    // Escribe un texto parcial o completo para buscar la empresa
    cy.get('.products_empresa .box-empresa input').type('INNOVA');

    // Espera y selecciona la empresa "INNOVA SOLUTIONS S.A.C."
    cy.get('.MuiAutocomplete-popper li')
      .contains('INNOVA SOLUTIONS S.A.C.')
      .click();

    // Verifica que el valor seleccionado sea correcto
    cy.get('.products_empresa .box-empresa input').should('have.value', 'INNOVA SOLUTIONS S.A.C.');

    //buscar los productos en los cards
    cy.searchAndVerify("Descargar extractos");
    cy.searchAndVerify("Automatización de los tipos de");
    cy.searchAndVerify("Descargar los registros de situación tributaria de la SUNAT");

  });



});
