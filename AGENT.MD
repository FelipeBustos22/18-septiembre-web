# Documento de Requisitos del Producto (PRD): 18 Septiembre Web

## 1. Visión General
**18 Septiembre Web** es una aplicación festiva y de alta energía diseñada para celebrar las Fiestas Patrias de Chile. El proyecto funciona como un "Sedómetro" y una cuenta regresiva para generar expectativa hacia el 18 de septiembre.

## 2. Metas y Objetivos
- Proporcionar una cuenta regresiva precisa para el 18 de septiembre de 2026.
- Crear una experiencia visual culturalmente resonante utilizando la estética de las "Fondas".
- Ofrecer elementos interactivos (botón de pánico, barra de progreso) que enganchen al usuario.
- Mantener una base de código eficiente y ligera utilizando tecnologías web modernas.

## 3. Público Objetivo
- Chilenos y entusiastas de la cultura chilena que esperan las fiestas nacionales.
- Usuarios que buscan una herramienta de cuenta regresiva divertida y con estética de "meme".

## 4. Stack Tecnológico
- **Framework:** Astro 5.1.7 (Arquitectura de Islas)
- **Estilos:** Tailwind CSS 4.1.18 (integrado con Vite)
- **Lenguaje:** TypeScript / JavaScript
- **Fuentes:** Archivo Black (Cuerpo), Bangers (Títulos) vía Google Fonts.
- **Gestor de Paquetes:** pnpm

## 5. Funcionalidades y Requisitos Funcionales
- **Cuenta Regresiva en Tiempo Real:** Muestra los días, horas, miuntos y segundos restantes.
- **Nivel de Sed Nacional (Termómetro de la Sed):** Una barra de progreso interactiva que calcula el porcentaje de "sed" basándose en el tiempo transcurrido desde un punto de inicio fijo (7 de febrero de 2026) hasta la fecha objetivo.
- **Botón de Acción ("¡S-A-C-H-E-I!"):** Un botón estilizado que redirige a contenido festivo (video de YouTube).
- **Visuales Dinámicos:**
    - "Guirnaldas" animadas con efecto de rebote y desfase temporal.
    - "Confeti Patriota" cayendo (partículas rojas, blancas y azules).
    - Imagen del "Gato Huaso" con animación "Tiki-Tiki".
- **Responsive / Adaptable:** El diseño se ajusta a varios tamaños de pantalla (2 columnas en móvil, 4 columnas en escritorio para el contador).

## 6. Guías de Diseño y UX
- **Paleta de Colores:**
    - Rojo (#d52b1e)
    - Azul (#0039a6)
    - Blanco (#ffffff)
    - Amarillo (#facc15 / bg-yellow-400) - Usado para acentos y componentes estilo "cartel de oferta".
- **Estética:** Mezcla de "Neobrutalismo" con "Fonda Chilena". Sombras pronunciadas (`shadow-[10px_10px_0px_rgba(0,0,0,1)]`), bordes gruesos y elementos inclinados (`skew-x-[-5deg]`).
- **Personalización:** Inclusión de referencias locales ("choripan favorito del sergio").
- **Tipografía:** Títulos en negrita, mayúsculas e itálicas para imitar la cartelería tradicional chilena.

## 7. Arquitectura del Proyecto
- `src/layouts/Layout.astro`: Define el cascarón HTML, las fuentes globales, el patrón de fondo de "Papel de Fonda" y la estructura centrada (`h-screen`).
- `src/pages/index.astro`: Página principal que contiene la estructura, elementos decorativos y el botón de acción principal.
- `src/components/Contador.astro`: Contiene la UI de los bloques del contador, la imagen del Gato Huaso y la lógica JavaScript para el temporizador.
- `src/styles/global.css`: Punto de entrada para las utilidades de Tailwind 4.

## 8. Detalles de Implementación Actual
- **Lógica:** La cuenta regresiva se calcula en el cliente mediante un `setInterval` en el componente `Contador`.
- **Estado:** El "Nivel de Sed" comienza con un mínimo del 18% (un guiño cultural a la fecha).
- **Interactividad:** El layout está bloqueado (`overflow-hidden`) para centrar la experiencia en la cuenta regresiva.
- **Optimización:** Utiliza Astro para minimizar el JS enviado, limitando el scripting al contador y la barra de progreso.