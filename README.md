# Austral Service — versión 1

Sitio web estático para Austral Service, taller automotriz en Punta Arenas.

## Abrir y publicar

- Para revisar localmente, abrir `index.html` o servir esta carpeta con cualquier servidor estático.
- Para publicar en Vercel, subir la carpeta completa a un repositorio y crear un proyecto sin framework. No requiere proceso de compilación.
- El documento principal es `index.html`; los estilos están en `styles.css` y las interacciones en `script.js`.

## Assets

Todos los recursos están dentro de `assets`, sin subcarpetas:

- `logo-austral-service.svg`: versión corporativa a color, reconstruida como vector a partir del logo visible en Instagram.
- `logo-austral-service-blanco.svg`: versión invertida para encabezado y pie de página oscuros.
- `isotipo-austral-service.svg`: símbolo llave + automóvil para favicon y usos pequeños.
- `iconos-sintomas.svg`: sistema de cinco íconos técnicos para el selector interactivo de diagnóstico.
- `hero-diagnostico-austral-service.png`: imagen original generada con IA para la portada; no proviene de Instagram ni representa a una persona real del taller.

## Funcionalidades

- Navegación responsive y menú móvil.
- Selector interactivo de síntomas con mensaje de WhatsApp contextual.
- Enlaces directos a WhatsApp, llamada, correo, Instagram y Google Maps.
- Mapa embebido de Errázuriz 383.
- Animaciones de entrada respetando `prefers-reduced-motion`.

## Nota de investigación

La información comercial se obtuvo del perfil público de Instagram indicado por el cliente y de la fotografía del letrero. Los servicios y horarios deben confirmarse con el negocio antes de publicación definitiva.
