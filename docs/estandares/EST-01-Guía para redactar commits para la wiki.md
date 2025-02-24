---
title: EST-01-Estándar para redactar commits para la wiki
sidebar_label: EST-01-Estándar para redactar commits para la wiki
slug: /est-01-redactar-commits-wiki/
---

# EST-01-Estándar para redactar commits para la wiki

## Propósito
El propósito de este documento es definir un estándar para el despacho de Pixel.IT en todos sus repositorios, para garantizar la consistencia y poder entender todos los cambios realizados por los miembros de Pixel.IT

## Estándares

### Formato General del Mensaje
- Todos los commits siguen el siguiente formato para su mensaje:
    - *tipo-de-commit(scope): descripción*
    
### Componentes del Formato
- Existen siete distintos tipos de commits de acuerdo al [estándar](https://medium.com/@fatihsevencan/git-commit-standards-d76f2f5f5c7f) convencional:

<table>
  <tr>
    <td>feat</td>
    <td>Agrega una nueva funcionalidad para el usuario.</td>
  </tr>
  <tr>
    <td>fix</td>
    <td>Arregla un error.</td>
  </tr>
  <tr>
    <td>refactor</td>
    <td>Refactoriza el código. No arregla un error ni agrega funcionalidades. Ejemplo: cambiar el nombre de una variable o una función.</td>
  </tr>
  <tr>
    <td>style</td>
    <td>Realizan cambios de formato que no afectan significativamente al código. Ejemplo: remover líneas en blanco, modificar el formato del código, corregir la sintaxis, etc.</td>
  </tr>
  <tr>
    <td>docs</td>
    <td>Realizan cambios en la documentación. Ejemplo: agregar la documentación de una función en el código.</td>
  </tr>
  <tr>
    <td>chore</td>
    <td>Realizan cambios en archivos y herramientas de configuración o la organización de proyecto.</td>
  </tr>
  <tr>
    <td>test</td>
    <td>Realizan cambios con código relacionado con el testing como escenarios o código de prueba.</td>
  </tr>
</table>

- El único scope relevante para commits de la wiki es la interfaz (UI). 

- El mensaje del commit tiene las siguientes restricciones:
    - Empieza la descripción con un verbo en infinitivo.
    - No excede 50 caracteres. Es claro y directo.
    - No usa un punto final o puntos suspensivos.
    - Todo el texto (menos nombres de funciones) va en minúsculas.

### Ejemplos
- feat(UI): crear botón de publicar comentario
- fix: corregir cálculo de colegiatura con beca
- refactor: optimizar función de encontrarMejorRuta
- style: mejorar legibilidad de la función agregarAmigo
- docs: actualizar documentación de función agregarAmigo
- chore: 
- test: 

## Control de cambios

| Version | Cambios realizados    | Autor          | Fecha      |
| ------- | --------------------- | -------------- | ---------- |
| 1.0.0   | Creación de guía | Jesús Cedillo & Paulina Almada | 21/02/2025 |
| 1.0.1   | Corrección de formato general | Paulina Almada | 21/02/2025 |
| 1.1.0   | Correción de guía a estándar | Jesús Cedillo | 24/02/2025 |
| 1.2.0   | Agregar chore y test | Jesús Cedillo & Paulina Almada | 24/02/2025 |