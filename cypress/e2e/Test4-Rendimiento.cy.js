describe('Pruebas de Desempeño y Estabilidad', () => {
    it('Medir el tiempo de carga del login y redirección al dashboard', () => {
      // Navegar al login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Acceder a la API 
      cy.window().then((win) => {
        const performance = win.performance;
  
        // Registrar el tiempo antes de hacer clic en el botón de login
        const startTime = performance.now();
  
        // Ingresar credenciales válidas
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[type="submit"]').click();
  
        // Esperar a que se redirija al dashboard
        cy.url().should("include", "/dashboard/index");
  
        // Registrar el tiempo después de la redirección
        const endTime = performance.now();
  
        // Calcular el tiempo transcurrido
        const loadTime = endTime - startTime;
  
        // Imprimir el tiempo de carga en la consola
        cy.log(`Tiempo de carga: ${loadTime} ms`);
  
        // Verificar que el tiempo de carga esté dentro de un umbral aceptable en milisegundos
        // Por ejemplo, menos de 2000 ms (2 segundos)
        expect(loadTime).to.be.lessThan(2000);
      });
    });
  });