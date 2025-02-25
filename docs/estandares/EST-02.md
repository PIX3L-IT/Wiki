---
title: EST-02-Estándar para versionamiento
sidebar_label: EST-02-Estándar para versionamiento
slug: /estandares/est-02-versionamiento/
---

# EST-02-Estándar para versionamiento

## Propósito

El propósito de este documento es definir un estándar de versionamiento para los archivos donde es relevante tener un control de cambios. Establece criterios para incrementar la numeración basado en el alcance de las modificaciones, asegurando consistencia y claridad en el seguimiento de cambios.

## Artefactos en los que aplica

- Archivos de la Wiki: [https://github.com/PIX3L-IT/Wiki](https://github.com/PIX3L-IT/Wiki)
- Nombramiento de branches de repositorios (conforme al estándar [EST-03](https://pix3l-it.github.io/Wiki/docs/estandares/est-03-nombrar-ramas)):

## Estándares

### Formato General

Siguiendo la convención del [versionado semántico](https://dev.to/imgildev/semver-que-es-y-por-que-es-importante-para-el-desarrollo-de-software-4ic1), utilizamos una secuencia de tres números separados por un punto `x.y.z`. Cada número corresponde a la versión del archivo, donde los cambios de mayor alcance se reflejan en los números más a la izquierda.

### Criterios de Actualización

Se actualiza la versión de un archivo basado en los siguientes criterios:

- Incrementa `x` para un cambio significativo al contenido o estructura del archivo. Por ejemplo, un replanteamiento de un proceso o un cambio de categoría de un archivo (de guía a estándar, etc).
    - El lanzamiento de un nuevo archivo se denomina `1.0.0` por default.
- Incrementa `y` para un cambio menor que complementa el contenido actual del archivo sin alterar el significado central. Por ejemplo, agregar o eliminar una sección sin modificar otras partes del archivo.
- Incrementa `z` para un cambio mínimo y altamente limitado, como correcciones de ortografía o cambios de estilo visual.

### Versionamiento en la Wiki
Al realizar un cambio en los documentos de la wiki, se debe actualizar la tabla de control de cambios en la parte inferior. Esta tabla se debe llenar de la siguiente manera:

| Versión | Cambios realizados    | Autor          | Fecha      |
| ------- | --------------------- | -------------- | ---------- |
| El versionamiento correspondiente | Descripción breve de los cambios realizados. Siempre debe comenzar con un verbo en infinitivo o un sustantivo. Ejemplo: Inclusión de Lineamientos Generales. | Nombre(s) de los involucrados en la propuesta del cambio. No es necesariamente la persona que realizó el cambio en la wiki, sino quién la propuso. | Fecha en la que se realizó el cambio


## Control de cambios

| Versión | Cambios realizados    | Autor          | Fecha      |
| ------- | --------------------- | -------------- | ---------- |
| 1.0.0   | Creación de estándar | Paulina Almada | 24/02/2025 |
| 1.0.1   | Inclusión de formato de "Cambios realizados" | Jesús Cedillo | 24/02/2025 |