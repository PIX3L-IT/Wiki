---
title: PRC-01-Proceso de creación de procesos
sidebar_label: PRC-01-Proceso de creación de procesos
slug: /prc-01-proceso-de-procesos
---

# PRC-01-Proceso de creación de procesos


## Propósito

Entregar una metodología que permita a los miembros del departamento definir nuevos procesos que hagan más rápido la manera de trabajo, garantizando la trazabilidad de cambios, la validación y el registro de los mismos.

## Miembros y/o roles involucrados

**Rol:** Todos en el departamento y SEPGs

## Entradas

**Recursos existentes:**

- [PLNT-01-Plantilla de procesos](https://pix3l-it.github.io/Wiki/docs/plnt-01-plantilla-de-procesos)
- [Excel “Compromiso departamental”](https://docs.google.com/spreadsheets/d/1RRB6jh7V_bR9adNpOoehV3PxprRBelh4XOofEedCx2c/edit?usp=sharing)
- [VAL-01-Validación de Procesos](https://pix3l-it.github.io/Wiki/docs/val-01-validacion-de-procesos)
- [EST-01-Estándar para redactar commits en los repositorios](https://pix3l-it.github.io/Wiki/docs/estandares/est-01-redactar-commits/)
- [EST-03-Estándar para nombrar a las ramas en los repositorios](https://pix3l-it.github.io/Wiki/docs/estandares/est-03-nombrar-ramas)

## Descripción del Proceso

| Etapa                              | Actividad                                                                                                                                                                                                                                                                  | Responsable                                          | Áreas de proceso y prácticas asociadas                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Identificación**          | Evaluar la forma de trabajo y detectar alguna problemática y/o necesidad que se pueda mitigar                                                                                                                                                                             | Cualquier miembro del departamento autor del proceso | **REQM (SP 1.5) Identificar inconsistencias entre planes del proyecto y requerimientos**                    |
| **Identificación**          | Confirmar si la problemática y/o necesidad debe tratarse por medio de un proceso, guía, plantilla, estándar o política                                                                                                                                                 | Cualquier miembro del departamento autor del proceso | **DAR (SP 1.5) Evaluar las soluciones alternativas.**                                                       |
| **Identificación**          | Seguir los puntos del documento VAL-01-Validación de Procesos de la sección de entrada                                                                                                                                                                                   | Autor del proceso                                    | **PP (SP 1.2) Identificar y analizar riesgos del proyecto**                                                 |
| **Exposición de propuesta** | Llenar la[PLNT-01-Plantilla de procesos](https://pix3l-it.github.io/Wiki/docs/plnt-01-plantilla-de-procesos) con tu propuesta en un documento de Word. Es importante llenar TODA la plantilla a conciencia                                                                    | Autor del proceso                                    | **DAR (SP 1.3) Identificar soluciones alternativas para atender problemas**                                 |
| **Exposición de propuesta** | Registrar en el[Excel “Compromiso departamental”](https://docs.google.com/spreadsheets/d/1RRB6jh7V_bR9adNpOoehV3PxprRBelh4XOofEedCx2c/edit?usp=sharing) en la hoja de “Propuestas departamentales” asegurándose de que todos tengan acceso al documento                  | Autor del proceso                                    | **DAR (SP 1.2) Establecer y mantener la criteria para evaluar alternativas y el ranking de esta criteria**  |
| **Exposición de propuesta** | Plantear la idea del proceso a algún integrante del grupo de SEPGs. Ellos determinarán si el proceso es útil y está completo                                                                                                                                           | Autor del proceso, SEPGs                             | **DAR (SP 1.6) Seleccionar soluciones entre las alternativas en función de los criterios de evaluación.** |
| **Documentación**           | Si el proceso fue aceptado, generar una nueva rama en la wiki partiendo desde main siguiendo el[EST-03-Estándar para nombrar a las ramas en los repositorios](https://pix3l-it.github.io/Wiki/docs/estandares/est-03-nombrar-ramas), para ingresar el nuevo proceso          | Autor del proceso                                    | **N/A**                                                                                                     |
| **Documentación**           | Generar un nuevo documento para el proceso, siguiendo el estándar de la plantilla en MD                                                                                                                                                                                   | Autor del proceso                                    | **N/A**                                                                                                     |
| **Documentación**           | Realizar el commit correspondiente, siguiendo el[EST-01-Estándar para redactar commits en los repositorios](https://pix3l-it.github.io/Wiki/docs/estandares/est-01-redactar-commits/)                                                                                        | Autor del proceso                                    | **N/A**                                                                                                     |
| **Documentación**           | Crear un PR, desde la rama nueva hacia main                                                                                                                                                                                                                                | Autor del proceso                                    | **N/A**                                                                                                     |
| **Validación**              | Se deberá aprobar el PR por un SEPG para que quede registrado en la wiki, donde se asegurará que cumplan los puntos del doc VAL-01-Validación de Procesos de la sección de salida. Posteriormente se deberá borrar la rama                                            | SEPG                                                 | **VAL (SP 2.1) Realizar la validación de los productos y componentes del producto seleccionados.**         |
| **Documentación**           | Ya después de haber sido registrado en la Wiki, el proceso deberá ser registrado en el[Excel “Compromiso departamental”](https://docs.google.com/spreadsheets/d/1RRB6jh7V_bR9adNpOoehV3PxprRBelh4XOofEedCx2c/edit?usp=sharing) en la hoja de “Compromiso departamental” | Autor del proceso                                    | **DAR (SP 1.2) Establecer y mantener la criteria para evaluar alternativas y el ranking de esta criteria**  |

## Consideraciones adicionales

### Control de cambios

Es obligatorio mantener un registro detallado de todos los cambios realizados, incluyendo las revisiones y actualizaciones, para asegurar la trazabilidad del proceso. Este registro debe ser parte del documento final y estar disponible para auditorías.

### Actualización de propuesta

El autor atiende la retroalimentación hecha por los miembros del despacho y se harán los cambios respectivos en la wiki.

### Rechazo de propuesta

El autor registra el estatus de “Rechazado” en el Excel de [“Compromiso departamental”](https://docs.google.com/spreadsheets/d/1RRB6jh7V_bR9adNpOoehV3PxprRBelh4XOofEedCx2c/edit?usp=sharing) en la hoja de “Propuestas Departamentales”.

## Salidas

- Nuevo proceso documentado en la Wiki.

## Control de cambios

| Versión | Cambios realizados                                            | Autor                                                                                                   | Fecha       |
| -------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------- |
| 1.0.0    | Creación de proceso                                          | Mónica Monserrat Martínez Vásquez, Samir Baidon Pardo, Luis Isauro Zamano Morales, Diego Lira Garcia | 27/02/2025  |
| 1.1.0    | Identificación de Áreas de proceso y prácticas asociadas | Samir Baidon Pardo                                                                                      | 27/02/20225 |
| 1.1.1    | Linkear la validación de los procesos | Luis Zámano                                                                                      | 27/02/20225 |
| 1.1.1    | Linkear la validación de los procesos correctamente | Luis Zámano                                                                                      | 27/02/20225 |
