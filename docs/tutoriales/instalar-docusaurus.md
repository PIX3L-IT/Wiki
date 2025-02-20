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



## 🎯 Flujo de Trabajo Básico


    *   **Clonar el Repositorio:**
        ```bash
        git clone https://github.com/alexmushi/pruebaDocusaurus.git
        cd pruebaDocusaurus
        ```

    *   **Crear una branch:**  Probablemente será buena idea crear nuevas branches cada vez que se agregue algo nuevo (substancial), para que haya alguien que cree el documento y alguien que lo revise
        ```bash
        git checkout -b mi-nueva-caracteristica
        ```

    *   **Escribir/Editar Documentación:**
        *   Los archivos de documentación están en la carpeta `docs`.
        *   Usa Markdown (`.md`) o MDX (`.mdx` es para agregar componentes de React).
        *   Los archivos están organizados en carpetas, podemos definir una estructura desde el inicio
        *  Se pueden editar en cualquier IDE, o incluso pueden hacer primero el documento en word si no les gusta el MD y le piden a chat que lo traduzca

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
          [SUCCESS] Docusaurus website is running at: http://localhost:3000/pruebaDocusaurus/

          √ Client
            Compiled successfully in 996.50ms

          client (webpack 5.98.0) compiled successfully
          ```

      Automáticamente se desplegará la página en tu navegador. 

        Esto inicia un servidor de desarrollo local.  Verás los cambios en tiempo real mientras editas.

        En este caso, Docusaurus estará disponible en [`http://localhost:3000/pruebaDocusaurus`](http://localhost:3000/pruebaDocusaurus) 🚀.

Ahorita para acceder a las páginas prueba, debes seleccionar **Tutorial** en la barra de navegación.
       

    *   **Añadir, Confirmar y Subir Cambios:**
          * Después de hacer los cambios necesarios, se hace push como en cualquier repo:
        ```bash
        git add -A
        git commit -m "Una descripción clara de mis cambios"
        git push
        ```

    *   **Crear un Pull Request (PR):**
        *   Crea un Pull Request desde tu rama (`mi-nueva-caracteristica`) hacia la rama principal (`main` o `master`).
        *   Describe los cambios en el PR.  *Sé detallado*.
        *   Solicita revisiones a otros miembros del equipo


    *   **Merge:**
        *   Una vez que el PR sea aprobado, la rama será fusionada con main. Una vez hecho esto, automaticamente se desplegarán los cambios en la página de github donde todos lo podrán consultar.




## ✅ Conclusión
¡Ahora tienes Docusaurus instalado y corriendo! 🎉 Puedes interactuar con la documentación modificando los archivos en `docs`.

Docusaurus es una herramienta que pensamos que sería buena idea utilizar para la documentación, pues tiene control de versiones y esta hecha con react (lo cual nos abre la puerta a muchas opciones, incluyendo una barra de búsqueda global). 
