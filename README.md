# 🇨🇱 18 Septiembre Web

Una aplicación web festiva y de alta energía diseñada para celebrar las Fiestas Patrias de Chile. Esta herramienta funciona como un "Sedómetro" nacional y una cuenta regresiva interactiva para generar expectativa hacia el 18 de septiembre.

![Gato Huaso](src/assets/gato%20huaso.jpg)

## 🚀 Características

- **Cuenta Regresiva en Tiempo Real**: Visualización de días, horas, minutos y segundos para el inicio de las celebraciones.
- **Termómetro de la Sed**: Una barra de progreso dinámica que calcula el nivel de "sed nacional" basándose en el tiempo restante.
- **Botón S-A-C-H-E-I**: Acceso directo a la motivación dieciochera.
- **Responsive**: Optimizado para dispositivos móviles y escritorio.

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Lenguaje**: JavaScript
- **Fuentes**: Archivo Black y Bangers (vía Google Fonts)
- **Gestor de Paquetes**: pnpm

## 📦 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos
├── src/
│   ├── assets/         # Imágenes y recursos (Gato Huaso)
│   ├── components/     # Componentes (Contador.astro)
│   ├── layouts/        # Estructura base (Layout.astro)
│   ├── pages/          # Páginas (index.astro)
│   └── styles/         # CSS Global y Tailwind
├── AGENT.MD            # Documento de Requisitos del Producto (PRD)
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio estático en `./dist/` |
| `pnpm preview` | Previsualiza el build localmente |
| `pnpm astro ...` | Ejecuta comandos de la CLI de Astro |

## 🇨🇱 ¡Viva Chile!
Este proyecto fue creado para celebrar la cultura chilena con un toque de humor
