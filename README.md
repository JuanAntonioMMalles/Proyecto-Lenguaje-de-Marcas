# Proyecto Lenguaje de Marcas 

Pagina web creada como proyecto de la Asignatura de Lenguaje de Marcas (LND), en este caso, yo e decidico ambientar mi pagina en el universo de Warhammer 40k.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto funcionando en tu máquina local para propósitos de desarrollo y pruebas.

### Prerequisitos

No se requieren instalaciones especiales. Solo necesitas:

- Un navegador web(Chrome, Firefox, Safari, Edge)
- Un editor de código (VS Code, Sublime Text, etc.)
- Opcionalmente, un servidor local como Live Server para desarrollo

### Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio

```bash
git clone https://github.com/JuanAntonioMMalles/OfficialProyect.git
```

2. Navega al directorio del proyecto

```bash
cd OfficialProyect
```

3. Asegúrate de tener la siguiente estructura de carpetas:

```
OfficialProyect/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── menu.js
└── img/
    ├── Aquila_imperialis.png
    ├── chaos-gods.jpg
    ├── space-marines.jpeg
    ├── imperial-guard.jpeg
    ├── Eldar.jpg
    ├── ORKS.png
    ├── necron.jpg
    ├── Dark-eldar.jpg
    ├── chaos-marines.jpg
    ├── tau.jpg
    └── tyranids.jpg
```

4. Abre `index.html` en tu navegador o utiliza un servidor local

Con Live Server en VS Code:
```
Clic derecho en index.html > Open with Live Server
```

## Características

- **Diseño Responsive**: Adaptado para escritorio, tablet y móvil
- **Interfaz Temática**: Colores inspirados en el Imperium (rojo sangre y dorado)
- **10 Facciones**: Marines Espaciales, Guardia Imperial, Orkos, Aeldari, Necrones, Drukhari, Marines del Caos, Tau, Tiránidos y Dioses del Caos
- **Menú Hamburguesa**: Para dispositivos móviles y tablets
- **Efectos Hover**: Interacciones visuales en las tarjetas de facciones


## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos y diseño responsive
  - Flexbox para layouts
  - Grid para organización de facciones
  - Media queries para responsive design
  - Gradientes y efectos visuales
- **JavaScript**: Funcionalidad del menú hamburguesa
- **Google Fonts**: Fuente 'Rubik Mono One' para el estilo temático

## Responsive Breakpoints

- **Escritorio** (>768px): Grid de 2-3 columnas, imágenes visibles a la izquierda
- **Tablet** (600px-768px): Columna única, diseño horizontal mantenido, menú hamburguesa activado
- **Móvil** (400px-600px): Columna única, diseño vertical con imágenes arriba
- **Móvil pequeño** (<400px): Columna única, imágenes ocultas para optimización

## Estructura del Código

### HTML
- Header con navegación responsive
- Main con grid de facciones
- Footer con enlaces sociales y copyright

### CSS
- Sistema de variables de color (posible mejora futura)
- Estilos modulares por sección
- Media queries organizadas por tamaño de pantalla

### JavaScript
- Control del menú hamburguesa
- Toggle de clase 'active' para mostrar/ocultar menú

## Versión Actual

**v1.0.0** - Lanzamiento inicial con 10 facciones principales

## Autores

- **Juan Antonio** - *Trabajo Inicial* - [JuanAntonioMMalles](https://github.com/JuanAntonioMMalles)

## Licencia

Este proyecto es una fan page no oficial y no está afiliado con Games Workshop Ltd. Warhammer 40,000 y todas las marcas relacionadas son propiedad de Games Workshop Ltd.

El código de este proyecto está disponible bajo la licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Agradecimientos

- Games Workshop por crear el universo de Warhammer 40,000
- Comunidad de fans de Warhammer 40k
- Artistas cuyos trabajos inspiraron el diseño visual
- PurpleBooth por la plantilla de README

### Futuras Características
- [ ] Páginas individuales para cada facción con lore detallado
- [ ] Sección de libros recomendados
- [ ] Galería de miniaturas pintadas
- [ ] Sección de videojuegos
- [ ] Sistema de búsqueda
- [ ] Tema claro/oscuro
- [ ] Integración con API de Games Workshop (si está disponible)
- [ ] Blog de noticias y actualizaciones


Para preguntas o sugerencias, puedes contactarme en:
- Email: juanantoniommalles@gmail.com.com
- GitHub: [@JuanAntonioMMalles](https://github.com/JuanAntonioMMalles)

---
