# Cine Now UI

Actúa como un Diseñador UI y Desarrollador Frontend Experto. Vamos a reconstruir la landing page del proyecto "CINE! UNA FUNCIÓN, UN PLAN". Este proyecto ya está conectado a mi Supabase, por lo que debes mapear los componentes directamente a las tablas existentes sin modificar la base de datos.

ESTRUCTURA VISUAL REQUERIDA:
1. Modo Oscuro Obligatorio: Toda la interfaz debe usar un fondo gris oscuro mate / negro (#121212) con textos en blanco y acentos en rojo vivo.
2. Sección Hero: En la parte superior izquierda debe ir el logo "CINE!" en rojo, seguido del título en letras grandes "LA CARTELERA NO SE QUEDA QUIETA.". Abajo, un buscador de películas y un filtro de géneros ("Todos los géneros").
3. Asset del Acomodador 3D: En el extremo izquierdo, flotando de forma responsiva junto al título, integra un muñeco de vinilo blanco 3D sentado en un sillón de cine marrón, usando gafas 3D clásicas (lente izquierdo azul, derecho rojo) y sosteniendo un balde de palomitas de maíz a rayas rojas. El asset debe estar perfectamente recortado, con bordes suavizados (anti-aliasing) y fundirse de manera invisible sobre el fondo negro de la interfaz usando transparencias reales o un sutil sombreado de oclusión ambiental. No debe mostrar recuadros blancos ni pixelados.
4. Sección de Cartelera: Abajo del hero, renderiza las tarjetas de películas ("Terminator", "Jurassic Park", "Star Wars: El Imperio Contraataca", "Alien") alineadas en una cuadrícula horizontal limpia con sus respectivas clasificaciones de edad (+16) y un botón de "VER FUNCIONES" que enlace a la lógica de reservas conectada a Supabase.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/27a6932f-0817-409d-9058-31f776e2dbc5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
