---
title: GUI-02-Guía de uso de Markdown
sidebar_label: GUI-02-Guía de uso de Markdown
slug: /gui-02-usar-markdown/
---

# GUI-02-Guía de uso de Markdown
Markdown es un lenguaje que nos permite formatear el texto de páginas de manera rápida y simple. Tiene su propia página de [documentación](https://www.markdownguide.org), pero aquí incluímos los elementos esenciales para la comodidad del despacho al trabajar en la wiki.

## Encabezados
Para crear un encabezado, debes poner hashtags `#` en frente del texto del encabezado. Existen seis niveles de encabezados, equivalentes a los distintos "headings" de HTML, dependientes del número de `#` utilizados. Mayores niveles indican menor importancia en la jerarquía. Entre más `#`, los encabezados son más pequeños y resaltan menos.

Además de ayudar con la legibilidad de la página, los encabezados crean un índice en la esquina derecha que agilizan la navegación dentro de la misma.

## Formato de Texto
Para aplicar ambos formatos al mismo tiempo, debes incluir ***tres*** asteriscos `***` alrededor del texto que quieres resaltar.

### Negritas
Para aplicar el formato de negritas a una palabra o una oración, debes incluir **dos** asteriscos `**` alrededor del texto que quieres resaltar. 

### Itálicas
Para aplicar el formato de itálicas a una palabra o una oración, debes incluir *un* asterisco `*` alrededor del texto que quieres resaltar.

## Listas
Puedes crear dos tipos de listas: numeradas o con viñetas. La única diferencia es en el símbolo que utilizas antes del contenido de cada elemento: el número correspondiente seguido por un punto o un guión `-`. Estos dos estilos de listas se pueden combinar.

Markdown no continua las listas automáticamente al saltar la línea, por lo que tienes que agregar el símbolo para cada elemento. 

Si quieres agregar una segunda línea a un elemento de una lista, debes indentar el segundo elemento cuatro espacios. 

``` 
1. Elemento 1
2. Elemento 2
    Otra parte del Elemento 2   
```

## Tablas
Para crear una tabla, debes crear el formato de la tabla en el código Markdown. Se utilizan tres guiones `---` para crear el encabezado de la tabla y barras verticales `|` para crear las columnas. Los saltos de línea crean el resto de las filas después de definir el encabezado. 

```
| Encabezado 1 | Encabezado 2 |
| -----------  | -----------  |
| Elemento 1   | Elemento 2   |
| Elemento 3   | Elemento 4   |
```

También puedes utilizar un [generador de tablas de Markdown](https://www.tablesgenerator.com/markdown_tables) para facilitar el proceso.  

## Bloques de Código
Para resaltar una sección de código de manera que se habilite la opción de copiarlo, debes rodearlo de tres comillas invertidas. 

Estas secciones pueden ser multilínea.

```
Ejemplo de una sección de código tipo las del profe Alex para Kotlin.
```

## Bloques de Citas
Para resaltar una sección de texto de manera que se le preste atención (típicamente para advertencias o notas), debes incluir un diple `>` antes del contenido.

> Así se ve un bloque de citas.

Estos bloques pueden ser multilínea. En tal caso, se debe incluir `>` en las líneas vacías entre oraciones para que todo el contenido forme parte del mismo bloque.

> Así se ve un bloque multilínea
>
> ¿Bastante útil, no?

## Links
Para incluir un link a una página externa, puedes escribir directamente. Para que el link se represente con texto en vez del URL, debes escribir el texto entre brackets `[]` seguido por el URL entre paréntesis.

```
[Documentación de Docusaurus](https://docusaurus.io/)
```

## Emojis
Para incluir emojis, existen dos maneras: puedes pegar el emoji directamente o puedes utilizar el código corto entre dos puntos `:`.

> :writing_hand: Pueden consultar de referencia esta [librería de emojis](https://getemoji.com/) o esta lista de [códigos cortos](https://emojibase.dev/shortcodes/?shortcodePresets=github) (las versiones de **GitHub**)

## Imágenes
Para incluir imágenes, debes seguir el siguiente proceso:

1. Asegurar que el archivo de la imágen está en `static/img`
2. Utilizar un signo de exclamación antes de poner el path de la imágen dentro del repositorio entre paréntesis
    - Lo más probable es que el path sea `../../static/img/nombre-de-la-imagen`
    - Puedes agregar alt text entre brackets antes del path
    - También puedes agregar un título (que aparece al hacer hover) entre comillas `""` después del path

![Ejemplo de imagen](../../static/img/docusaurus-social-card.jpg "Ejemplo")

```
![Ejemplo de imagen](../../static/img/docusaurus-social-card.jpg "Ejemplo")
```

## Videos
Para incluir videos de YouTube, debes seguir el siguiente proceso:

1. Identificar el ID del URL de YouTube (la sección después de `watch?v=`)
2. Utilizar un signo de exclamación antes de poner el ID del URL después de `https://img.youtube.com/vi/` en brackets y el link del video repositorio entre paréntesis
    - Va a aparecer en la página como la imagen del video
    - Puedes agregar alt text entre brackets antes del path
    - Al seleccionar la imagen, redirecciona a YouTube

[![Ejemplo de video](https://img.youtube.com/vi/4FL4GORUTSM/0.jpg)](https://www.youtube.com/watch?v=4FL4GORUTSM)

```
[![Ejemplo de video](https://img.youtube.com/vi/4FL4GORUTSM/0.jpg)](https://www.youtube.com/watch?v=4FL4GORUTSM)
```

## Tags de HTML
Si quieres aplicar algún formato que va más allá de las habilidades de Markdown, puedes utilizar ciertos tags de HTML para lograrlo.

Los usos esenciales de tags de HTML dentro de Markdown son: 

### Colores
Para agregar texto de otros colores, puede incluir los tags `<font color="">` `</font>` para especificar el color. 

Puedes utilizar el nombre del color (por ejemplo, <font color="red"> rojo </font> o `color="red"`) o puedes utilizar el código hexademical (por ejemplo, <font color="#AF42AE"> morado </font> o `color="#AF42AE"`)

### Formato Dentro de Tablas
Ciertos formatos de Markdown se deshabilitan dentro de las tablas, como los encabezados, saltos de línea y listas. En tal caso, puedes incluir los tags de HTML para estas distintas características dentro de las columnas de la tabla.

- `<h#>` `</h#>` para encabezados
- `<ul><li>` `</li></ul>` para elementos de una lista
- `<br>` `</br>` para saltos de línea

| <h3> Encabezado 3 </h3>   | Texto plano                                        |
| -----------               | -----------                                        |
| Línea 1 <br></br> Línea 2 | <ul><li> Elemento 1</li><li> Elemento 2 </li></ul> |

> 💡 Herramientas de formato como negritas e itálicas funcionan normalmente en tablas.

### Centrar Texto
Para centrar texto en la página, puedes incluir los tags `<center>` `</center>` alrededor del texto.