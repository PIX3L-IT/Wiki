---
title: Instalación de Docusaurus
sidebar_label: Instalación de Docusaurus
slug: /instalacion-docusaurus
---

# 📌 Instalación de Docusaurus en Ambiente Local

Docusaurus es un framework de documentación basado en React. Sigue estos pasos para instalarlo y configurarlo en tu ambiente de desarrollo.Usarlo es tan simple como hacer commits a un repo con carpetas y archivos de Markdown.

## 💡 Requisitos previos
Antes de usar Docusaurus, asegúrate de tener:
- [Node.js](https://nodejs.org/) v16 o superior



## 🎯 Instalación y uso


    *   **Descargar docusaurus:**
        ```bash
        npm install docusaurus
        ```

    *   **Clonar el Repositorio:**
        ```bash
        git clone https://github.com/PIX3L-IT/Wiki
        cd Wiki
        ```

    *   **Crear una branch:**  Cada vez que se vaya a hacer un cambio substancial, hay que hacer una rama para agregarlo con PR
        ```bash
        git checkout -b mi-nueva-caracteristica
        ```

    *   **Escribir/Editar Documentación:**
        *   Los archivos de documentación están en la carpeta `docs`, y dentro encontrarás las distintas secciones que tenemos.
        *   Para hacer una nueva página, crea un nuevo archivo de Markdown (`.md`) en la carpeta correspondiente.
        *  Se puede editar en cualquier IDE, o incluso puedes hacer primero el documento en word si no te gusta el MD y le pides a chat que lo traduzca.

    *   **Ver los Cambios Localmente:**

          * En tu **terminal** escribe:

          ```bash
          npm start
          ```

         * Se van a desplegar varios mensajes. Al final, deberías ver:

          ```bash
          > prueba-docusaurus@0.0.0 start
          > docusaurus start

          [INFO] Starting the development server...
          [SUCCESS] Docusaurus website is running at: http://localhost:3000/Wiki/

          √ Client
            Compiled successfully in 996.50ms

          client (webpack 5.98.0) compiled successfully
          ```

    :::info

    En el caso de que salga un error como el siguiente: `MODULE_NOT_FOUND` desinstala la carpeta `node_modules` y corre
    ```bash
        npm install
        ```

    :::

      Automáticamente se desplegará la página en tu navegador. 

        Esto inicia un servidor de desarrollo local.  Verás los cambios en tiempo real mientras editas.

        En este caso, Docusaurus estará disponible en [`http://localhost:3000/Wiki`](http://localhost:3000/Wiki) 🚀.
       

    *   **Añadir, Confirmar y Subir Cambios:**
          * Después de hacer los cambios necesarios, se hace push como en cualquier repo:
        ```bash
        git add -A
        git commit -m "Una descripción clara de mis cambios"
        git push
        ```

    :::warning

    Para que la documentación que subiste aparezca en la página pública (no en local) deberá de estar en la rama `main`, asegúrate de hacer un PR en el caso de haber creado una rama aparte.

    :::


    *   **Crear un Pull Request (PR):**
        *   Crea un Pull Request desde tu rama (`mi-nueva-caracteristica`) hacia la rama principal (`main` o `master`).
        *   Describe los cambios en el PR.  *Sé detallado*.
        *   Solicita revisiones a otros miembros del equipo


    *   **Merge:**
        *   Una vez que el PR sea aprobado, la rama será fusionada con main. Una vez hecho esto, automaticamente se desplegarán los cambios en la página de github donde todos lo podrán consultar.

## ✅ Conclusión
¡Ahora tienes Docusaurus instalado y corriendo! 🎉 Puedes interactuar con la documentación modificando los archivos en `docs`.

Docusaurus es una herramienta que pensamos que sería buena idea utilizar para la documentación, pues tiene control de versiones y esta hecha con react (lo cual nos abre la puerta a muchas opciones, incluyendo una barra de búsqueda global). 
