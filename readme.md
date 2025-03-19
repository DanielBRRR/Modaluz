# Proyecto Web Modaluz

Este proyecto web ha sido desarrollado como una práctica para aplicar conocimientos de **HTML5, CSS3, diseño responsive** y buenas prácticas de estructuración semántica. El sitio simula una **tienda de ropa y moda**, inspirada en **El Corte Inglés** y **Primark**, con diferentes categorías de productos.

## Estructura del Proyecto

```bash
│   index.html
│   mujer.html
│   hombre.html
│   infantil.html
│   deportes.html
│   hogar.html
│   README.md
│   theme.js
│
├───css
│       mujer.css
│       mujer.css.map
│       hombre.css
│       hombre.css.map
│       infantil.css
│       infantil.css.map
│       deportes.css
│       deportes.css.map
│       hogar.css
│       hogar.css.map
│       styles.css
│       styles.css.map
│
├───imagenes
│
└───scss
        mujer.scss
        hombre.scss
        infantil.scss
        deportes.scss
        hogar.scss
        styles.scss
```

## Descripción de las Páginas

- **index.html**: Página principal con navegación y ofertas destacadas.
- **mujer.html**: Sección de moda femenina con catálogo y opciones de filtrado.
- **hombre.html**: Sección de moda masculina con productos organizados.
- **infantil.html**: Sección de moda infantil con ropa y accesorios para niños.
- **deportes.html**: Sección de ropa y accesorios deportivos para distintas actividades.
- **hogar.html**: Sección de artículos para el hogar, como decoración y muebles.

## Estilos CSS

Cada página cuenta con su propia hoja de estilos para facilitar el mantenimiento del proyecto.

### Características principales:
- Diseño responsive con media queries.
- Estilo moderno con fuentes sans-serif.
- Navegación intuitiva y accesible.
- Uso de Flexbox y Grid layout.
- Footer fijo en todas las páginas.

## Modo Oscuro y Claro

El sitio incorpora una funcionalidad de cambio de tema que permite alternar entre modo claro y modo oscuro. Este sistema está gestionado mediante JavaScript en el archivo `theme.js`, modificando dinámicamente los colores de fondo y texto.

## Recursos Gráficos

Las imágenes utilizadas en el proyecto están almacenadas en la carpeta **/imagenes** y han sido optimizadas para garantizar una carga rápida y eficiente.

## Diseño Responsive

El diseño del sitio se adapta a diferentes dispositivos, garantizando una experiencia de usuario óptima en:

- Escritorio (≥1024px)
- Tablets (≥768px)
- Smartphones (<768px)

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio.
- **CSS3**: Estilos y diseño responsive.
- **Flexbox & Grid**: Organización y distribución del layout.
- **JavaScript (theme.js)**: Interacciones dinámicas, como el cambio de tema.
- **FontAwesome**: Uso de iconos.
- **Bootstrap (CDN)**: Mejora de compatibilidad y diseño.

## Cómo Ejecutar el Proyecto

1. Descarga o clona este repositorio.
2. Abre cualquier archivo `.html` en tu navegador.
3. Navega entre las secciones mediante el menú superior.
4. Prueba la funcionalidad de cambio de tema.

## Autor

- **Nombre**: Daniel Andaluz Ginés
- **Asignatura**: Desarrollo de Interfaces
- **Fecha de entrega**: 20/03/2025

## Licencia

Este proyecto ha sido desarrollado con fines educativos y no representa una tienda oficial.

