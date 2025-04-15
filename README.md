### 1. **Prueba de Login**
Archivo: `Test-Login.cy.js`

- **Objetivo:** Validar los escenarios de login utilizando credenciales válidas e inválidas.
- **Casos cubiertos:**
  - Login exitoso con credenciales válidas.
  - Login fallido con credenciales inválidas.
  - Login fallido con campos vacíos.
- **Validaciones:**
  - Redirección al dashboard en caso de éxito.
  - Mensajes de error visibles en caso de fallos.

---

### 2. **Navegación y Validación de Elementos**
Archivo: `Test2-Navegacion.cy.js`

- **Objetivo:** Navegar por distintas secciones del sistema y validar la presencia y comportamiento de elementos.
- **Casos cubiertos:**
  - Navegación a la sección "Admin".
  - Validación de la tabla de usuarios en la sección "Admin".
  - Búsqueda de un usuario por nombre y validación de resultados.

---

### 3. **Pruebas Data-Driven de Login**
Archivo: `Test3-DataDriven.cy.js`

- **Objetivo:** Utilizar un enfoque data-driven para probar distintos escenarios de login con múltiples conjuntos de datos.
- **Datos de prueba:** Se encuentran en el archivo `cypress/fixtures/loginData.json`.
- **Casos cubiertos:**
  - Login exitoso con credenciales válidas.
  - Login fallido con credenciales inválidas.
  - Login fallido con campos vacíos o credenciales incompletas.


---

### 4. **Prueba de Desempeño y Estabilidad**
Archivo: `Test4-Rendimiento.cy.js`

- **Objetivo:** Medir el tiempo de carga de la página de login y el dashboard, comprobando que el rendimiento es aceptable.
- **Métricas medidas:**
  - Tiempo desde el clic en el botón de login hasta la redirección al dashboard.
- **Validaciones:**
  - El tiempo de carga debe estar dentro de un umbral aceptable (por ejemplo, 2000 ms).

---
