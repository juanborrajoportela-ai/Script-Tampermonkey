# Script-Tampermonkey
# Script Tampermonkey - Automatización de Firmas en Docuten

Este proyecto consiste en un **UserScript** desarrollado para el entorno **Tampermonkey**. Su objetivo principal es automatizar la cumplimentación de formularios en la plataforma de firma digital **Docuten**, optimizando el tiempo de pruebas y entrada de datos.

## 🚀 Funcionalidad

El script detecta cuando el usuario está en la página de edición de firmantes y realiza las siguientes acciones automáticamente:
1.  **Carga de datos dinámica:** Obtiene los datos de los usuarios (nombre, móvil, email, tipo de firma) desde un archivo JSON externo alojado en este mismo repositorio.
2.  **Inyección en el DOM:** Localiza los campos específicos del formulario mediante selectores CSS precisos y los rellena.
3.  **Navegación automatizada:** Ejecuta la secuencia de clics necesaria en los botones de la interfaz para avanzar en el proceso de firma.

## 🛠️ Tecnologías y Herramientas

* **JavaScript (ES6+):** Lógica del script.
* **Tampermonkey:** Gestor de UserScripts.
* **JSON:** Estructura de datos para separar la información de la lógica.
* **Git & GitHub:** Control de versiones y alojamiento del recurso de datos (simulando un backend/CDN).

## 🔄 Evolución del Proyecto (Proceso de Desarrollo)

Este proyecto ha pasado por varias fases para llegar a una arquitectura más limpia y mantenible, típica del desarrollo web moderno:

1.  **Versión Monolítica:** Inicialmente, los datos de los usuarios estaban "hardcoded" (escritos directamente) dentro del archivo `.js` principal. Esto hacía difícil cambiar los usuarios sin tocar el código lógico.
2.  **Separación de Conceptos (Separation of Concerns):** Se extrajeron los datos a un archivo `datos.json` independiente.
3.  **Integración con Recursos Externos:** Se utilizó la directiva `@resource` de Tampermonkey y `GM_getResourceText` para leer el JSON directamente desde el repositorio de GitHub (`raw`). Esto permite actualizar la lista de usuarios en GitHub sin necesidad de que los usuarios reinstalen el script.
4.  **Control de Versiones:** Todo el proceso se gestionó mediante Git, resolviendo conflictos de fusión (merge conflicts) y manteniendo un historial limpio de cambios.

## 📋 Cómo usarlo

1.  Instala la extensión **Tampermonkey** en tu navegador.
2.  Crea un nuevo script y pega el código de `tampermonkeyfirma.js`.
3.  Asegúrate de que la cabecera incluye la línea `@resource` apuntando al archivo `datos.json` de este repositorio.
4.  Accede a la web de Docuten y observa la magia.

---
*Proyecto realizado como parte de la automatización de campos del formulario web de firma supervisado por Brais Blanco (III)