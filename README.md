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

### Responsividad

- En **pantallas pequeñas (≤ 420 px):**
  - las cards de lugares se muestran apiladas en una sola columna.

- En **pantallas grandes (≥ 1024 px):**
  - se muestran varias cards por fila, con espaciado y alineación coherentes.

---

## 5) Requisitos técnicos

### Metodología de estilos

- Aplicar una metodología para la organización de estilos, recomendadamente **BEM**.
- Utilizar nombres de clases acordes a la metodología, por ejemplo:
