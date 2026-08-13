# Portafolio de Carlos Sosa

Sitio personal de Carlos Sosa, estudiante de Ingeniería Mecatrónica. Está
construido con React, TypeScript y Vite, y se publica automáticamente en GitHub
Pages.

## Agregar un proyecto desde GitHub

1. Entra a la carpeta `public/projects` y usa **Add file → Upload files** para
   subir la imagen del proyecto.
2. Abre `src/data/projects.ts` y presiona el ícono del lápiz.
3. Copia una ficha existente y cambia título, descripción, tecnologías y
   enlaces.
4. En `image`, escribe la ruta de la imagen, por ejemplo
   `"/projects/robot-seguidor.jpg"`.
5. Guarda los cambios con **Commit changes**. GitHub actualizará la página de
   manera automática en unos minutos.

Los campos `repository` y `demo` aceptan un enlace o `null` si todavía no están
disponibles.

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
`https://notssosa.github.io` después de cada cambio en la rama `main`.
