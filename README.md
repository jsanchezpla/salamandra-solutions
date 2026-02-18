


# Web Salamandra Solutions

Este repositorio contiene el sitio web de Salamandra Solutions construido con Astro. Incluye páginas, componentes y datos para mostrar proyectos, servicios y experiencia.

## Tecnologías

- Astro
- JavaScript / JSX
- HTML & CSS

## Estructura del proyecto (resumen)

- `src/pages` — rutas y páginas del sitio (index, about, contact, proyectos)
- `src/components` — componentes reutilizables organizados por secciones
- `src/assets` — imágenes y activos estáticos
- `src/data` — datos usados para proyectos, servicios y experiencia
- `public` — iconos y SVG públicos
- `astro.config.mjs`, `package.json`, `tsconfig.json` — configuración del proyecto

## Configuración y ejecución local

Requisitos: Node.js (v16+ recomendado) y npm.

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo (servidor local con recarga en caliente):

```bash
npm run dev
```

Generar build de producción:

```bash
npm run build
```

Previsualizar el resultado de producción:

```bash
npm run preview
```

## Despliegue

El sitio es estático y puede desplegarse en plataformas como Vercel, Netlify o cualquier hosting estático. Subir la carpeta `dist/` generada por `npm run build`.

## Personalizar contenido

- Proyectos y datos: editar los archivos en `src/data` (por ejemplo `projectData.js`).
- Páginas y componentes: editar los archivos en `src/pages` y `src/components`.
- Estilos: `src/styles` contiene CSS global y por secciones.

Archivos clave:

- [src/pages/index.astro](src/pages/index.astro) — página principal
- [src/pages/about.astro](src/pages/about.astro) — página "Sobre mí"
- [src/pages/contact.astro](src/pages/contact.astro) — formulario de contacto

## Contribuciones

Si quieres mejorar el portafolio, abre un issue o un pull request. Para cambios mayores, crea una rama nueva y realiza un PR describiendo tus cambios.

## Licencia

Este proyecto utiliza una licencia MIT por defecto. Cambia la licencia según necesites.

## Contacto

Para consultas o cambios, usa la página de contacto del sitio o contacta al autor desde los datos públicos en el portafolio.



