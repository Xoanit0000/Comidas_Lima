# Sabores de Lima

Blog de la **Actividad 1** (Laboratorio: creación de un blog) de *Desarrollo de aplicaciones en red*.
Nueve entradas sobre platos emblemáticos de la cocina limeña, hechas con HTML5, CSS y JavaScript
sin frameworks y publicadas con GitHub Pages.

- **Web:** https://xoanit0000.github.io/Comidas_Lima/
- **Repositorio:** https://github.com/Xoanit0000/Comidas_Lima
- **Contenido:** 9 entradas con texto, imagen, ingredientes, historia, fuentes y créditos.

## Estructura

```
Comidas_Lima/
├── index.html      documento único: portada, índice, 9 entradas y pie
├── styles.css      diseño: paleta, tipografía, rejillas y adaptación al móvil
├── script.js       mejoras opcionales: filtro, entrada activa, botón «Arriba»
├── img/
│   └── espiral.svg símbolo de la cabecera y del pie
├── README.md       este documento
└── LICENSE         Apache License 2.0
```

## Cómo verlo en local

No hace falta servidor ni instalar nada:

1. Descarga el repositorio (o clónalo).
2. Abre `index.html` con doble clic.

Si prefieres un servidor local (recomendado para probar rutas y caché):

```bash
python -m http.server 8000
```

y visita `http://localhost:8000`.

## Publicación

GitHub Pages publica desde la rama `main`, carpeta raíz. Cada `push` lanza un despliegue nuevo:

```bash
git add .
git commit -m "Blog completo: portada, índice, 9 entradas y estilos"
git push origin main
```

> La carpeta local está dentro de Dropbox, que también sincroniza `.git`. Conviene pausar la
> sincronización mientras se hace un commit para no dejar el repositorio a medias.

## Decisiones de diseño

**Una sola página.** Todo el contenido vive en `index.html` y se navega con anclas (`#ceviche`,
`#causa`…). Así el blog funciona sin JavaScript, se puede imprimir entero y los enlaces del menú
son compartibles.

**HTML semántico.** `header`, `nav`, `main`, `section`, `article`, `figure`/`figcaption` y `footer`.
Un solo `h1`, un `h2` por entrada y `h3` para las secciones internas.

**Paleta.** Verde jade `#234936`, verde bosque `#123326`, musgo `#647A45`, salvia `#A8B49A`,
marfil `#F3EFE7`, lima `#B8D66A`, cian `#63C9C1`, papaya `#FFB07C` y papaya oscuro `#A84E25`.
Los contrastes siguen el manual de la marca: el lima nunca se usa como texto sobre fondo claro y
los enlaces sobre marfil van en papaya oscuro (4,8:1).

**Tipografía.** *Sora* para titulares y *Nunito Sans* para el cuerpo, con
`ui-sans-serif`/`system-ui` como respaldo si no cargan las fuentes.

**JavaScript opcional.** `script.js` añade tres mejoras que no bloquean la lectura:
filtro por etiquetas, resaltado de la entrada activa en el menú y botón «Arriba». Con JavaScript
desactivado el blog se lee y se navega igual; los filtros simplemente no aparecen.

**Accesibilidad.** Enlace «Saltar al contenido», foco visible, `alt` en todas las imágenes,
`aria-pressed` en los filtros, `aria-current` en el menú, contraste revisado y
`prefers-reduced-motion` respetado.

## Fotografías

Las imágenes se sirven desde Wikimedia Commons (versión de 1280 px) y cada pie de foto indica
autor, licencia y enlace al original, como exige la atribución.

| Entrada | Archivo en Commons | Autoría | Licencia |
|---|---|---|---|
| Ceviche | `Ceviche at Peru.jpg` | ProjectManhattan | CC0 |
| Pescados | `Pescado sudado (dorada)2.jpg` | MiguelAlanCS | CC BY-SA 4.0 |
| Causa limeña | `Causa Rellena.jpg` | spersper | CC BY 2.0 |
| Ají de gallina | `Ají de gallina - Tradicional.jpg` | Feralbt | CC BY-SA 3.0 |
| Lomo saltado | `Lomo-saltado-perudelights.jpg` | WikiHes | CC BY-SA 4.0 |
| Arroz chaufa | `Ceremonia de certificación Restaurantes Saludables 2018 (67).jpg` | Municipalidad de Miraflores | CC BY 2.0 |
| Chicha morada | `Chicha Morada 2017.jpg` | young shanahan | CC BY 2.0 |
| Suspiro a la limeña | `Suspiro limeño.jpg` | Luisfranciscopm | CC BY-SA 4.0 |
| Mazamorra morada | `Mazamorramoradaconcanela.jpg` | MiguelAlanCS | CC BY-SA 4.0 |

### Servir las fotos en local (opcional)

Si prefieres que la web no dependa de Commons:

1. Descarga cada imagen desde su página de Commons.
2. Guárdala en `img/` con el nombre que aparece en el comentario que hay justo encima de cada
   `<img>` (`img/ceviche.jpg`, `img/pescados.jpg`, `img/causa.jpg`, `img/aji-de-gallina.jpg`,
   `img/lomo-saltado.jpg`, `img/arroz-chaufa.jpg`, `img/chicha-morada.jpg`,
   `img/suspiro.jpg`, `img/mazamorra-morada.jpg`).
3. Cambia el `src` de esa imagen por la ruta local.

Reduce cada foto a unos 1200 px de ancho y menos de 300 KB antes de subirla.

## Contenido y fuentes

Cada entrada cierra con sus fuentes (artículos de Wikipedia en español sobre cada plato y sobre la
gastronomía del Perú). Las afirmaciones históricas dudosas —la etimología de «causa», por ejemplo—
están redactadas como hipótesis y no como hechos.

## Transparencia

El proceso de trabajo con herramientas de IA está documentado en el **registro de uso de la IA**
que se entrega con la actividad. Cualquier texto o bloque de código aportado por una IA debe
anotarse ahí antes de la entrega final.

## Licencia

El código se distribuye bajo Apache License 2.0 (ver `LICENSE`). Los textos son del autor.
Las fotografías conservan la licencia de sus autores, indicada en cada pie de foto.
