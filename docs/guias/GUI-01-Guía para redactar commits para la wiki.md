---
title: GUI-01-Guía para redactar commits para la wiki
sidebar_label: GUI-01-Guía para redactar commits para la wiki
slug: /gui-01-redactar-commits-wiki/
---

# GUI-01-Guía para redactar commits para la wiki

## Propósito

Esta guía explica cómo redactar el mensaje de un commit en el repositorio de la wiki basado en su contenido.

## Información Relevante

### Formato General del Mensaje
- Todos los commits siguen el siguiente formato para su mensaje:
    - *&lt;tipo-de-commit&gt;(&lt;scope&gt;): &lt;descripción&gt;*

### Componentes del Formato
- Existen cinco distintos tipos de commits:

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

## Control de cambios

| Version | Cambios realizados    | Autor          | Fecha      |
| ------- | --------------------- | -------------- | ---------- |
| 1.0.0   | Creación de guía | Jesús Cedillo & Paulina Almada | 21/02/2025 |
