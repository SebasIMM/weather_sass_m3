# Módulo 3 – App de Clima (Interfaz y Estilos)

## 1) Propósito

Refactorizar la interfaz de la aplicación de clima desarrollada en el Módulo 2, aplicando metodologías de organización de estilos, preprocesamiento con SASS y el modelo de cajas para construir un layout más claro, mantenible y responsivo.

El foco de esta iteración no es agregar nuevas funcionalidades complejas, sino mejorar la experiencia visual y la calidad del CSS. Mantén la temática que elegiste, pero ten en cuenta que posteriormente deberás conectar la aplicación con una API, por lo que ahora es el momento de redirigir el rumbo de tu proyecto.

---

## 2) Objetivos de aprendizaje

- Describir y aplicar una metodología de organización de estilos (por ejemplo, BEM) en una interfaz web.
- Utilizar SASS para modularizar y reutilizar código CSS (variables, parciales, mixins, anidamiento).
- Implementar el modelo de cajas y conceptos de layout (posicionamiento, tipos de layout) en la App de Clima.
- Utilizar Bootstrap 4 para simplificar el desarrollo de layouts, contenidos y componentes.
- Gestionar el proyecto con Git/GitHub (commits descriptivos, trabajo incremental, README actualizado).

---

## 3) Alcance (MVP)

Se trabaja sobre la misma estructura base de la app del Módulo 2:

- **Inicio (Home):** grilla de lugares con cards que muestran el clima actual.
- **Detalle de lugar:** vista con información ampliada del lugar seleccionado.

En esta entrega se espera:

- Mantener la misma funcionalidad mínima lograda en Módulo 2.
- Rediseñar la interfaz para que:

  - Tenga una estructura clara (header/nav, contenido principal, footer).
  - Organice las cards de lugares en un layout responsivo y ordenado.
  - Utilice una guía de estilos mínima (colores, tipografía, tamaños) aplicada de forma consistente.

No es obligatorio agregar nuevas funciones de JavaScript más allá de lo ya implementado; el énfasis está en **HTML + CSS/SASS + Bootstrap**.

---

## 4) Requisitos funcionales mínimos

La app debe seguir mostrando:

- Un listado de lugares en **Home** mediante cards con información de clima (icono, temperatura, estado, etc.).
- Una vista de **detalle** para un lugar seleccionado.

La interfaz debe:

- Incluir un **header o navbar** consistente (con el nombre de la app y enlaces principales).
- Incluir un **footer** con información básica del proyecto (autor, año, breve descripción).
- Organizar el **contenido principal** en secciones reconocibles (por ejemplo, zona de búsqueda, zona de resultados).

Responsividad:

- En **pantallas pequeñas (≤ 420 px):** las cards de lugares se muestran apiladas en una sola columna.
- En **pantallas grandes (≥ 1024 px):** se muestran varias cards por fila, con espaciado y alineación coherentes.

---

## 5) Requisitos técnicos

### Metodología de estilos
- Aplicar una metodología para la organización de estilos, recomendadamente BEM.
- Utilizar nombres de clases acordes a la metodología, por ejemplo:
  - `.weather-app`
  - `.weather-app__header`
  - `.weather-app__content`
  - `.place-card`
  - `.place-card__name`
  - `.place-card__temp`
  - `.place-card--sunny`
  - `.place-card--rainy`

### SASS y modularización
- Crear una estructura básica de SASS, por ejemplo:


  
/scss
/base/_variables.scss
  -/layout/_layout.scss
/components/_place-card.scss
main.scss


- En `main.scss` importar los parciales (`@import 'base/variables';`, etc.).
- Utilizar al menos:
  - **Variables:** para colores, tipografías, tamaños y/o espaciados.
  - **Anidamiento:** para agrupar estilos de un mismo bloque (por ejemplo, `.place-card { ... &__name { ... } }`).
  - **Un mixin simple** (por ejemplo, para aplicar un estilo repetido a varias cards o botones).
- Compilar SASS a un archivo CSS final (por ejemplo, `css/main.css` o `dist/css/main.css`) y enlazarlo en el HTML.

### Bootstrap 4 (o 5 si lo deseas)
- Utilizar el sistema de grid de Bootstrap para organizar las cards de lugares:
  - Ejemplo: `col-12` en móvil, `col-md-6`, `col-lg-4` en pantallas más grandes.
- Utilizar al menos dos componentes de Bootstrap, por ejemplo:
  - Navbar
  - Cards
  - Botones
  - Formularios
  - Breadcrumb
- Incluir Bootstrap 4 vía CDN (CSS y JS).

### Git/GitHub
- Crear un repositorio público para esta entrega (por ejemplo: `weather-frontend-m3`) o continuar el del Módulo 2 con una rama o versión clara.
- Realizar mínimo **3 commits** con mensajes descriptivos que reflejen el progreso (ej.:
  - `chore: configurar estructura sass`
  - `style: aplicar BEM a cards de lugares`
  - `layout: mejorar grid en home`)
- Mantener el `README.md` actualizado para esta iteración.

---

## 6) Entregables

- Proyecto comprimido en un único archivo `.zip` que contenga:
  - Archivos HTML.
  - Carpeta de SASS (`/scss`) y CSS compilado (`/css` o `/dist/css`).
  - Carpeta de recursos (imágenes, íconos, etc.), si corresponde.

- Archivo `README.md` con:
  - Descripción breve de la App de Clima y su temática (qué tipo de lugares maneja).
  - Indicación de la metodología de estilos utilizada (BEM/OOCSS/SMACSS).
  - Breve explicación de la estructura SASS (parciales principales y qué agrupan).
  - Enlace al repositorio público de GitHub del proyecto.

---

# Rúbrica de evaluación

| Criterio | Excelente (3 pts) | Adecuado (2 pts) | Básico (1 pt) | Insuficiente (0 pts) |
|---|---|---|---|---|
| **Metodología de estilos (BEM u otra)** | Metodología aplicada de forma consistente en toda la app; nombres claros de bloques, elementos y modificadores. | Metodología aplicada en la mayoría de las secciones; algunos nombres inconsistentes. | Se intenta usar metodología, pero solo en partes aisladas; muchos nombres genéricos. | No se aprecia metodología; clases arbitrarias o confusas. |
| **SASS y modularización** | Parciales bien organizados; uso correcto de imports, variables, anidamiento y ≥1 mixin; CSS compilado sin problemas. | Estructura SASS con algunos parciales; variables y anidamiento usados parcialmente; CSS funcional. | Un solo SASS casi sin parciales; uso mínimo de variables/anidamiento; poca ventaja frente a CSS plano. | No usa SASS o no compila; estilos solo en CSS plano o con errores graves. |
| **Layout, cajas y Bootstrap responsivo** | Layout claro (header, contenido, footer); buen uso de modelo de cajas y grid Bootstrap; se ve bien en móvil y escritorio. | Layout entendible con pequeños problemas de espaciado/alineación; Bootstrap y responsivo aceptables. | Layout funcional pero desordenado; uso limitado de Bootstrap; responsivo parcial con quiebres notorios. | Layout roto o confuso; no usa Bootstrap o lo usa mal; no es responsivo. |
| **Identidad visual y consistencia** | Paleta, tipografías y tamaños coherentes; interfaz limpia y alineada con la temática del proyecto. | Estilos mayormente consistentes; algunos detalles de color/tamaño desalineados. | Estilos irregulares; combinación de colores y fuentes poco coherente; temática se nota poco. | Estilos caóticos; sin identidad visual; difícil de leer o usar. |
| **Git/GitHub y README** | ≥3 commits descriptivos; repo público accesible; README claro con descripción, temática, metodología de estilos, SASS y enlace al repo. | ≥3 commits aceptables; repo público; README con descripción básica y enlace. | <3 commits o mensajes genéricos; README muy breve o incompleto. | Sin repo público o sin enlace; no hay README o está vacío. |