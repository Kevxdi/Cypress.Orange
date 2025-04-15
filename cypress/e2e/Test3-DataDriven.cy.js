describe('Pruebas Data-Driven de Login', () => {
    beforeEach(() => {
      // Navegar al login antes de cada prueba
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
  
    // Cargar los datos desde el archivo JSON
    const loginData = require('../fixtures/loginData.json');
  
    loginData.forEach((data) => {
      it(`Prueba de login con usuario: "${data.username}" y resultado esperado: "${data.expectedResult}"`, () => {
        // Ingresar el nombre de usuario y contraseña
        if (data.username) cy.get('[name="username"]').type(data.username);
        if (data.password) cy.get('[name="password"]').type(data.password);
  
        // Hacer clic en el botón de login
        cy.get('[type="submit"]').click();
  
        // Validar el resultado esperado
        if (data.expectedResult === "success") {
          cy.url().should("include", "/dashboard/index");
          cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain", "Dashboard");
        } else if (data.expectedResult === "error-message") {
          cy.get('.oxd-alert-content').should("be.visible");
        } else if (data.expectedResult === "missing-username") {
          cy.get(':nth-child(1) > .oxd-input-group > .oxd-text')
            .should("be.visible")
            .and("contain", "Required");
        } else if (data.expectedResult === "missing-password") {
          cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
            .should("be.visible")
            .and("contain", "Required");
        }
      });
    });
  });
  