# Interseguro — UI Kit Web

Implementación en React + Vite del "Interseguro Web UI Kit" exportado desde
Claude Design: un sitio de demostración de marca (Home, detalle de producto,
cotizador de SOAT en 3 pasos y Vive+) construido con los tokens y componentes
reales del design system.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Origen

El contenido de `src/app.css` (tokens de color, tipografía, espaciado, radios
y sombras) y de `src/components.jsx` / `src/screens.jsx` / `src/App.jsx` fue
extraído del export de Claude Design (`Interseguro Web UI Kit.html`) y
convertido de scripts globales cargados por CDN (React/Babel en runtime) a
módulos ES compilados por Vite, sin alterar el diseño ni el copy.

Diferencias respecto al export original:

- La tipografía Manrope se carga desde Google Fonts (`index.html`) en vez de
  incluir los `.woff2` como binarios embebidos — mismo resultado visual.
- Los íconos usan el paquete npm `lucide` (misma versión, v0.475.0) en vez
  del script UMD cargado por CDN.

## Pendiente

Este export no incluyó `README.md`, `SKILL.md`, los `chats/` de contexto, las
páginas `preview/*.html` (swatches de color/tipografía/espaciado) ni el
manual de marca en PDF. Si se comparten esos archivos, este UI kit se puede
ampliar o corregir contra esa fuente adicional.
