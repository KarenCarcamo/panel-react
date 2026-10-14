# Panel Administrativo (React)

Panel con barra lateral, barra superior y rutas: **Inicio**, **Clases** y **Docentes**.

## Ejecutar en local
```bash
npm install
npm run dev
```

## Cambiar el nombre del usuario
Edita `USUARIO.nombre` en `src/data/datos.js`.

## Desplegar en Vercel
1. Sube la carpeta a un repositorio de GitHub.
2. En vercel.com → *Add New Project* → importa el repositorio.
3. Framework: **Vite** (se detecta solo). Pulsa *Deploy*.

El archivo `vercel.json` ya redirige todas las rutas a `index.html` para que `/clases` y `/docentes` funcionen al recargar.
