# Portafolio de Carlos Sosa

Sitio personal de Carlos Sosa, estudiante de Ingeniería Mecatrónica. Está
construido con React, TypeScript y Vite, y se publica automáticamente en GitHub
Pages.

## Agregar un proyecto desde GitHub

1. Crea una carpeta para el proyecto dentro de `public/projects` y usa
   **Add file → Upload files** para subir sus imágenes o video.
2. Abre `src/data/projects.ts` y presiona el ícono del lápiz.
3. Copia una ficha existente y completa en español el título, la descripción,
   las tecnologías y los enlaces.
4. En `images`, agrega una ficha por imagen con su ruta, texto alternativo y
   título. Usa una ruta como `"/projects/robot-seguidor/portada.jpg"`.
   Si el proyecto usa video, completa `video` con su ruta, etiqueta accesible y
   título; conserva `video: null` cuando no sea necesario.
5. Agrega la versión en inglés con el mismo `id` dentro de
   `src/data/projectTranslations.ts`.
6. Guarda los cambios con **Commit changes**. GitHub actualizará la página de
   manera automática en unos minutos.

Los campos `repository` y `demo` aceptan un enlace o `null` si todavía no están
disponibles.

Los textos generales de navegación y secciones se encuentran en
`src/data/content.ts`, organizados en bloques `es` y `en`.

## Trabajar localmente

Requiere Node.js 22 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Para verificar la versión que se publicará:

```bash
pnpm build
pnpm test
```

## Publicación

El flujo `.github/workflows/deploy.yml` genera y publica el sitio en
`https://notsosa.github.io` después de cada cambio en la rama `main`.
