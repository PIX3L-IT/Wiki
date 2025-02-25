---
title: EST-03-Estándar para nombrar a las ramas en los repositorios
sidebar_label: EST-03-Estándar para nombrar a las ramas en los repositorios
slug: /estandares/est-03-nombrar-ramas
---

# EST-03-Estándar para nombrar a las ramas en los repositorios

## Propósito
El propósito de este documento es definir un estándar de nombramiento de ramas para el despacho de Pixel.IT. Esto garantiza la consistencia entre los repositorios, y el propósito que tiene cada rama en dichos repositorios. 

## Artefactos en los que aplica

- Ramas en el repositorio de la Wiki: https://github.com/PIX3L-IT/Wiki

## Estándares

### Lineamientos generales
- Las ramas deben de seguir los siguientes lineamientos:
    - **Minúsculas y separados por guiones:** Siempre usar las letras minúsculas y usar guiones para separar las palabras. Ejemplo: ```feature/new-login```.
    - **Caracteres Alphanuméricos:** Solo usar guiones y caracteres alphanuméricos (a-z, A-Z, 0–9). No usar espacios, signos de puntación, etc. 
    - **Sin guiones continuos:** No usar guiones continuos, ya confunde y es difícil de leer. Ejemplo: ```feature--new-login```.
    - **Sin guiones al final:** No acabar el nombre de la rama con un guión. Ejemplo: ```feature-new-login-```.
    - **Descriptivo:** El nombre es descriptivo y consiso, idealmente reflejando el trabajo realizado en la rama. 

### Componentes del Formato
- Los distintos tipos de ramas se definen siguiendo las convenciones descritas en [este recurso](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534) y en [esta referencia](https://tilburgsciencehub.com/topics/automation/version-control/advanced-git/naming-git-branches/):

<table>
  <tr>
    <td>feature</td>
    <td>Agrega una nueva funcionalidad para el usuario.</td>
  </tr>
  <tr>
    <td>bugfix</td>
    <td>Arregla errores en el código.</td>
  </tr>
  <tr>
    <td>hotfix</td>
    <td>Arregla errores críticos que ya están en producción. Estas ramas son hechas directo de producción.</td>
  </tr>
  <tr>
    <td>release</td>
    <td>Prepara versiones de lanzamiento a producción.</td>
  </tr>
  <tr>
    <td>docs</td>
    <td>Escribe, actualiza y mejora documentación. Ejemplo: actualizar el README.md.</td>
  </tr>
  <tr>
    <td>test</td>
    <td>Para pruebas o experimentación que no se consideran como un bug.</td>
  </tr>
</table>

### Formato General
- El formato general para nombrar las ramas debe incluir tres componentes, separados por una barra y, en el caso del último componente, por un guion. El formato es:
    - *tipo-de-rama/version/id-descripción*

Donde: 
1. **tipo-de-rama:** Indica la categoría de la rama (por ejemplo, feature, bugfix, hotfix, etc.).
2. **version:** Representa el número de versión en formato `x.y.z` (por ejemplo, v1.0.0), conforme al estándar [EST-02](https://pix3l-it.github.io/Wiki/docs/estandares/est-02-versionamiento/).
    - **x (Launches):** Representa el número del lanzamiento principal de la aplicación o producto. Ejemplo: en el primer lanzamiento del equipo, se usa el `1`. 
    - **y (Sprint):** Indica el sprint en el que se está trabajando. Por ejemplo, en el Sprint 5, usarías 5 como valor de x.
    - **z (Patch o Corrección):** Para pequeñas correcciones o ajustes puntuales sin agregar nuevas funcionalidades. Ejemplo: Si no se han realizado correcciones, se utiliza `0`; si se añade una corrección, se incrementa a `1`, y así sucesivamente.
    - **Ejemplo:** Con una referencia del primer lanzamiento, y el cuarto sprint, este sería un el flujo de como se crean las ramas:
        1. `feature/v1.4.0/01-nuevo-login`: La implementación de la funcionalidad. La rama es cerrada después de pasar las pruebas. 
        2. `bugfix/v1.4.1/01-crash-login`: Un error crítico es encontrado después de que la rama fue cerrada. Incrementa la `z` para dar 1.4.1. Ya que fue corregido la rama es cerrada. 
        3. `feature/v1.4.0/02-agregar-paciente`: Cuando se crea un nuevo feature, se inicia su versión con el patch en 0, sin importar que en otro feature se hayan aplicado patches. Esto significa que cada feature tiene su propia secuencia de versiones de patches. 
3. **id-descripción:** Combina un identificador y una breve descripción de lo que se trabajará en la rama.
    - **id:** 
        - En proyectos, utiliza el identificador del requisito que se abordará.
        - En la wiki, utiliza una abreviación que indique el tipo de contenido (por ejemplo, proceso, estándar, guía, etc.) seguida de un número.
        - Ejemplo: Si se agrega un nuevo estándar y el último es ```EST-08```, el identificador de la rama será: ```EST-09```.
    - **descripción:**
        - En la wiki, incluye una breve descripción del proceso, estándar o guía que se trabajará.
        - En proyectos, ofrece una breve descripción de la tarea o funcionalidad que se implementará.

- **Nota:** En el caso de las ramas release, no es necesario agregar el id y la descripción. Esto porque las ramas release preparan una salida a producción y no consiste de una funcionalidad específica.

### Ejemplos 
- ```feature/v1.0.0/02-agregar-paciente```
- ```hotfix/v2.3.2/01-crash-iniciar-sesion```
- ```bugfix/v3.0.0/45-error-login-firebase```
- ```release/v2.3.1```
- ```docs/v1.0.0/EST-04-plantilla-PR```
- ```test/v1.0.0/23-prueba-integracion``` 

## Control de cambios

| Version | Cambios realizados    | Autor          | Fecha      |
| ------- | --------------------- | -------------- | ---------- |
| 1.0.0   | Creación de estándar | Jesús Cedillo | 24/02/2025 |
| 1.1.0   | Inclusión versionamiento específico | Jesús Cedillo | 24/02/2025 |
| 1.2.0   | Ejemplo de versionamiento | Jesús Cedillo | 24/02/2025 |
