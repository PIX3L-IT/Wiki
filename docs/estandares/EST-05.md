---
title: EST-05-Estándar de Especificación de Requerimientos de Software
sidebar_label: EST-05-Estándar de Especificación de Requerimientos de Software
slug: /estandares/est-05-especificacion-requerimientos
---
# EST-05-Estándar de Especificación de Requerimientos de Software

## Propósito

El propósito de este documento es definir un estándar para la especificación y definición de requerimientos, específicamente del SRS, alineado con la metodología DAD. De este modo, garantizamos la institucionalización y estandarización de procesos según CMMI-DEV 1.3, facilitamos la revisión y validación, y mejoramos la trazabilidad de los requerimientos a lo largo del proyecto.


## Artefactos en los que aplica

- SRS

## Áreas de proceso y prácticas en las que aplica

- SG1 (REQM) - SP 1.1 Comprender los requisitos.
- SG1 (REQM) - SP 1.2 Obtener el compromiso sobre los requisitos.
- SG1 (REQM) - SP 1.4 Mantener la trazabilidad bidireccional de los requisitos.

## Estándares

A continuación, se describen las partes que componen el estándar de Especificación de Requerimientos de Software [IEEE 830](https://www.fdi.ucm.es/profesor/gmendez/docs/is0809/ieee830.pdf) y sus adaptaciones para alinearlo con la metodología DAD. 

Link a un ejemplo: https://press.rebus.community/requirementsengineering/back-matter/appendix-d-ieee-830-sample/

### 1. Introducción
#### 1.1 Propósito  
Explica el objetivo general del documento con la finalidad de ayudar a los interesados a comprender qué se busca lograr.

#### 1.2 Ámbito del sistema  
Incluye el nombre del sistema, describe sus límites (qué hará y qué no hará), y detalla los beneficios, objetivos y metas esperados.

#### 1.3 Definiciones, acrónimos y abreviaturas  
Define todos los términos, acrónimos y abreviaturas utilizadas en el documento.

#### 1.4 Referencias  
Enlista los documentos, estándares y recursos utilizados o citados, como IEEE 830, DAD y CMMI-DEV 1.3.

### 2. Descripción general
#### 2.1 Perspectiva del proyecto  
Relaciona al sistema con otros productos. Aquí se menciona si el sistema forma parte de un sistema mayor o es independiente.

#### 2.2 Visión del proyecto  
Incluye la visión del proyecto o sistema a desarrollar. También incluye la matriz de los stakeholders del proyecto.

#### 2.3 Características de los usuarios  
Describe las características generales de los usuarios, incluyendo su experiencia técnica, nivel educativo y rango de edades.

#### 2.4 Restricciones  
Detalla las limitaciones del sistema, incluyendo las reglas de negocio.

#### 2.5 Suposiciones y dependencias  
Enuncia hipótesis asumidas durante la definición de los requisitos y dependencias externas que pueden afectar el proyecto.

### 3. Requisitos específicos
#### 3.1 Interfaces externas  
Describe cómo el sistema interactúa con otros sistemas o componentes externos.

#### 3.2 Requisitos funcionales (Historias de Usuario)
Detalla los requisitos del producto en manera de Historias de Usuario. 

**Formato:**
```plaintext
HU [Número] - [Nombre descriptivo]
Como... [¿Quién?]  
Quiero... [¿Qué acción?]  
Para... [¿Qué beneficio/objetivo?]
```

**Ejemplo**:

<table>
    <tr>
        <td>
        **HU 1 - Iniciar sesión**

        **Como** usuario, **quiero** iniciar sesión, **para** asegurar la seguridad, trazabilidad y autoría de los datos que obtengo para su monitoreo confiable.
        </td>
    </tr>
</table>

##### 3.2.1 Matriz de trazabilidad de los requerimientos (RTM)  
Incluye la prioridad, estimación, responsable, URL de vista, diagrama de secuencia, encargados de desarrollo/pruebas, y estado general del requisito.

#### 3.3 Diagrama de la base de datos (MER)  
Incluye el diagrama de base de datos del proyecto con información de cada tabla.

#### 3.4 Restricciones de diseño  
Define restricciones arquitectónicas y económicas que delimitan el alcance y viabilidad.

#### 3.5 Requisitos no funcionales  
Detalla atributos de calidad como seguridad, disponibilidad y escalabilidad.

#### 3.6 Diagrama de Despliegue  
Define la arquitectura básica del sistema y conexión entre componentes.

### 4. Apéndices  
Sólo se incluye si es necesario agregar información no cubierta en secciones anteriores.

## Cambios sobre el estándar IEEE 830

Con la finalidad de alinear lo más posible el estándar con las prácticas definidas en el CMMI-DEV 1.3 y la metodología DAD, al igual que asegurar que todas las secciones sean de utilidad,  realizamos adaptaciones en las siguientes secciones:

- Cambiamos la sección 2.2 de “Funciones del producto” a “Visión del proyecto”. Creemos que la visión del proyecto representa una mejor forma de plasmar lo que queremos lograr en el proyecto. Adicionalmente, el estándar IEEE 830 menciona que la sección debe incluir lo que hace el sistema a grandes rasgos, y esto ya forma parte de la sección 1.2 “Ámbito del sistema”.

- Eliminamos la sección 2.6 de “Requisitos futuros”, ya que al priorizar las historias de usuario usando MoSCoW, las HU que priorizamos como “Would” constituyen requisitos futuros, lo que genera ambigüedad en dicha sección.

- Eliminamos la sección 3.6 de “Otros requisitos” por ser ambiguo y dar lugar a interpretaciones subjetivas, lo que va en contra del principio de institucionalización y estandarización de procesos definido en el CMMI.

- En la sección 3.2, optamos por usar Historias de Usuario en lugar de Casos de Uso. A diferencia de los Casos de Uso, dirigido a los desarrolladores, las Historias de Usuario permiten describir los requisitos de manera simple y enfocada a los usuarios, facilitando la comunicación y validación con stakeholders.

- Para tener una trazabilidad de los requerimientos en todas sus fases, y llevar un registro de los spikes (requerimientos de bajo nivel) se incluye la matriz RTM en la sección 3.2.1. 

- Decidimos cambiar la sección 3.3 de “Requisitos de rendimiento” a “Diagrama de la base de datos (MER)”. Los requisitos de rendimiento forman parte de los requisitos no funcionales, y estos son incluidos en la sección 3.5. El MER forma parte importante del análisis, y creemos que es más útil tenerlo junto con el SRS. 

- La sección 3.5 cambia de nombre de “Atributos del sistema” a “Requisitos no funcionales”, para incluir todos los atributos de calidad que ocupa el sistema al igual que el diagrama de despliegue. 

## Control de cambios

| Versión | Cambios realizados                       | Autor                           | Fecha      |
| ------- | ---------------------------------------- | ------------------------------- | ---------- |
| 1.0.0   | Creación de estándar                    | Diego García & Jesús Cedillo      | 25/02/2025 |
