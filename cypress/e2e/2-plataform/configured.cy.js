describe('onfigured of patters', () => {
  const email = 'natalia.espinoza@seidor.com';
  const password = 'Ninoska12$';

  before(() => {
    cy.login(email, password);
    cy.url({ timeout: 20000 }).should('include', '/product');
        // Verifica que el campo Autocomplete esté visible
        cy.get('.products_empresa .box-empresa input').should('exist').and('be.visible');

        // Escribe un texto parcial o completo para buscar la empresa
        cy.get('.products_empresa .box-empresa input').type('INNOVA');
    
        // Espera y selecciona la empresa "INNOVA SOLUTIONS S.A.C."
        cy.get('.MuiAutocomplete-popper li').contains('INNOVA SOLUTIONS S.A.C.').click();
    
        // Verifica que el valor seleccionado sea correcto
        cy.get('.products_empresa .box-empresa input').should('have.value', 'INNOVA SOLUTIONS S.A.C.');
    
        //buscar los productos en los cards
        cy.searchAndVerify('Descargar los registros de situación tributaria de la ');
    
        // Busca el elemento li cuyo data-testid contiene parte del nombre esperado.
        cy.get('li[test-id*="Descargar los registros"]').within(() => {
          // Dentro del card encontrado, realiza acciones como encontrar y hacer clic en un botón.
          cy.get('.box-actions button').click(); // Ajusta este selector al botón en tu card.
          cy.url({ timeout: 20000 }).should('include', '/product/product?type=');
        });
  });



  
  it.only('should add a new pattern successfully', () => {
    const newPattern = 'Agentes de Retención';
  
    // Acceder al contenedor principal
    cy.get('[test-id="pattern-configuration"]').within(() => {
      // Verificar y hacer clic en "Padrones"
      cy.contains('h4', 'Padrones')
        .should('be.visible')
        .click();
  
      // Seleccionar el botón "Agregar"
      cy.contains('button', 'Agregar')
        .should('be.visible')
        .click();
  
   
      // Haz clic en el select para desplegar el menú
      cy.get('div[role="button"][aria-labelledby="option-patterns"]')
      .should('be.visible')
      .click();
  
    
     // Asegúrate de que el menú desplegable sea visible
    // cy.get('ul[role="listbox"]', { timeout: 6000 })
    // .should('be.visible') // Verifica que el menú esté visible
    // .within(() => {
    //   // Busca y selecciona la opción
    //   cy.contains('li[role="option"]', 'Agentes de Retención')
    //     .should('be.visible') // Verifica que la opción sea visible
    //     .click(); // Haz clic en la opción
    // });


  
      // Verificar que el botón de confirmar está habilitado y hacer clic
      // cy.get('.submit-box .btn_primary.small')
      //   .should('not.have.class', 'disabled') // Verificar que no tiene la clase 'disabled'
      //   .should('be.visible') // Confirmar que el botón es visible
      //   .click();


    });

  });
  
  
//   it('should show an error when adding a duplicate pattern', () => {
//     const duplicatePattern = 'duplicate-pattern';

//     // Agregar el primer patrón
//     cy.get('[data-cy="pattern-input"]')
//       .type(duplicatePattern)
//       .should('have.value', duplicatePattern);
//     cy.get('[data-cy="add-pattern-btn"]').click();

//     // Intentar agregar el mismo patrón nuevamente
//     cy.get('[data-cy="pattern-input"]')
//       .type(duplicatePattern)
//       .should('have.value', duplicatePattern);
//     cy.get('[data-cy="add-pattern-btn"]').click();

//     // Verificar que se muestre un mensaje de error
//     cy.get('[data-cy="error-message"]')
//       .should('be.visible')
//       .and('contain', 'Este patrón ya existe.');
//   });

//   it('should remove the last added pattern', () => {
//     const removablePattern = 'removable-pattern';

//     // Agregar un patrón
//     cy.get('[data-cy="pattern-input"]')
//       .type(removablePattern)
//       .should('have.value', removablePattern);
//     cy.get('[data-cy="add-pattern-btn"]').click();

//     // Verificar que el patrón está en la lista
//     cy.get('[data-cy="pattern-list"]').should('contain', removablePattern);

//     // Eliminar el último patrón
//     cy.get('[data-cy="remove-pattern-btn"]').last().click();

//     // Verificar que el patrón ya no está en la lista
//     cy.get('[data-cy="pattern-list"]').should('not.contain', removablePattern);
//   });

//   it('should save changes successfully', () => {
//     // Hacer clic en el botón de guardar cambios
//     cy.get('[data-cy="save-patterns-btn"]').click();

//     // Verificar que el mensaje de éxito aparece
//     cy.get('[data-cy="success-message"]')
//       .should('be.visible')
//       .and('contain', 'Cambios guardados con éxito.');
//   });



});
