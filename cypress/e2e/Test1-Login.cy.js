describe("Pruebas de Login en OrangeHRM", () => {
  // URL base del sistema
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("Caso de éxito: Login con credenciales válidas", () => {
    // Ingresar credenciales válidas
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();

    // Verificar redirección al dashboard
    cy.url().should("include", "/dashboard/index");
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain", "Dashboard");

  });

  it("Caso de error: Login con credenciales inválidas", () => {
    // Ingresar credenciales inválidas
    cy.get('[name="username"]').type("usuario_invalido");
    cy.get('[name="password"]').type("contraseña_invalida");
    cy.get('[type="submit"]').click();

    // Verificar que se muestra un mensaje de error
    cy.get(".oxd-alert-content")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });

  it("Caso de error: Login con campos vacíos", () => {
    cy.get('[type="submit"]').click();
    // Verificar que se muestra un mensaje de error
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
      .should("be.visible")
      .and("contain", "Required");
  });
});