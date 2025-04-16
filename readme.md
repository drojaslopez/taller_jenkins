# Taller CI
### Daniel Rojas
## Resumen del Proyecto

Este proyecto implementa una API simple utilizando Node.js y el framework Express. Está diseñado como parte de un taller de Integración Continua (CI) para demostrar conceptos básicos de desarrollo, pruebas y despliegue.

### Tecnologías Principales

*   **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
*   **Express:** Framework web minimalista para Node.js, utilizado para construir la API.
*   **Jest:** Framework de pruebas de JavaScript, empleado para ejecutar las pruebas unitarias y de integración.
*   **Supertest:** Librería para facilitar las pruebas de APIs HTTP, integrada con Jest.
*   **Docker:** Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores (opcional, según la configuración).

### Estructura del Proyecto (Típica)

Aunque la estructura exacta puede variar, un proyecto típico de este tipo podría incluir:

*   `index.js` / `server.js`: Archivo principal que configura e inicia el servidor Express y define las rutas de la API.
*   `package.json`: Define las dependencias del proyecto y los scripts de npm (como `start` y `test`).
*   `package-lock.json`: Registra las versiones exactas de las dependencias instaladas.
*   `node_modules/`: Directorio donde se instalan las dependencias (generalmente no se incluye en el control de versiones).
*   `tests/` o `spec/`: Directorio que contiene los archivos de prueba escritos con Jest y Supertest.
*   `Dockerfile`: (Si se usa Docker) Define la imagen del contenedor para la aplicación.
*   `docker-compose.yml`: (Si se usa Docker Compose) Define los servicios, redes y volúmenes para la aplicación multi-contenedor.
*   `.gitignore`: Especifica los archivos y directorios que Git debe ignorar.
*   `README.md`: Documentación del proyecto (¡este archivo!).

### Funcionalidad

La API expone endpoints básicos (rutas) que pueden ser consumidos por clientes HTTP. Las pruebas automatizadas verifican que estos endpoints funcionen como se espera. El proyecto está configurado para ser ejecutado localmente para desarrollo y pruebas, y potencialmente para ser construido y ejecutado dentro de contenedores Docker.
