/*global cy*/



describe('Login Tests', () => {
  const email = 'natalia.espinoza@seidor.com'; 
  const password = 'Ninoska12$'; 
  const baseUrl = Cypress.env('BASE_URL');

  beforeEach(() => {
      cy.visit(`${baseUrl}/login`);
  });


  it('should show an error for invalid credentials', () => {
    const invalidEmail = 'natalia.espinoza@seidor.com';
    const invalidPassword = 'Ninoska13&';

    cy.login(invalidEmail, invalidPassword).then(() => {
      // Verifica que el mensaje de error sea visible

    cy.get('.errorMessage')
    .should('contain',"Incorrect password.")
    });
  });


  it('should log in successfully with valid credentials', () => {
    cy.login(email, password);
  
    // Verifica que el usuario fue redirigido correctamente
     cy.url({ timeout: 20000 }).should('include', '/product'); 

     // verifica si el usuario se guardó en el localstorage
     cy.window().then((win) => {
      cy.wait(30000); 
      const session = win.localStorage.getItem('session');
      expect(session).to.exist;

       // Si es un JSON, también puedes validar su estructura o propiedades
      const parsedSession = JSON.parse(session);
      cy.log('Parsed Session:', parsedSession);

      // Ejemplo: Verifica que tenga una propiedad específica
      expect(parsedSession).to.have.property('sCorreo');
      expect(parsedSession.sCorreo).to.equal(email);

    });
    cy.contains('Habilidades');


  });


});









