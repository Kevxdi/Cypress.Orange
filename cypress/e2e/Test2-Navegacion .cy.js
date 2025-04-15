describe('Navegacion y validacion de elementos en el dashboard', () => {
    beforeEach(() => {
        // Navegar al login y autenticarse
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[type="submit"]').click();

        // Verificar que se redirige al dashboard
        cy.url().should("include", "/dashboard/index");
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain", "Dashboard");
    });

   it('Navegacion a la sección "Admin" y validación de elementos', () => {
       // Hacer clic en el menú "Admin"
       cy.get(':nth-child(1) > .oxd-main-menu-item').click();
       // Verificar que se cargue la sección "Admin"
       cy.url().should("include", "/admin/viewSystemUsers");
       cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain", "Admin");
       // Validar la presencia de la tabla de usuarios
       cy.get('.oxd-table').should("be.visible");
   });

    it('Validacion de datos: Buscar un usuario por nombre', () => {
        // Navegar a la sección "Admin"
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();

        // Verificar que se cargue la sección "Admin"
        cy.url().should("include", "/admin/viewSystemUsers");

        // Ingresar un nombre en el filtro de búsqueda
        cy.get('.oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");

        // Hacer clic en el botón de busqueda
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();

        // Validar que la tabla de resultados se actualice con datos consistentes
        cy.get('.oxd-table').should("be.visible");
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div')
    });
});