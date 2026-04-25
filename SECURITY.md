# Seguridad del proyecto

Este documento describe las medidas de seguridad aplicadas en este repositorio (Astro 5 SSG), con foco en **supply chain de dependencias usando pnpm**.

---

## Versiones soportadas

| Branch | Soporte de seguridad |
| --- | --- |
| `main` | Sí |

---

## Reportar una vulnerabilidad

Si detectas una vulnerabilidad, **no** abras un issue público.

Usa **GitHub Security Advisories** ("Report a vulnerability") o contacta al mantenedor por un canal privado, incluyendo:

- descripción del problema
- impacto esperado
- pasos de reproducción
- versión/commit afectado

Se intentará confirmar recepción y triage inicial en un plazo razonable.

---

## Seguridad de dependencias (pnpm)

Al instalar dependencias se incorpora código de terceros (directo y transitivo). Si un paquete es comprometido, puede afectar la máquina de desarrollo, el proceso de build o el artefacto final.

Este proyecto aplica controles para reducir esa superficie:

### 1) Gestor único y lockfile único

- Gestor único: **pnpm**.
- Lockfile canónico: **`pnpm-lock.yaml`**.
- El `package-lock.json` no se usa en este repositorio.

Esto evita estado híbrido (npm + pnpm) y reduce deriva entre instalaciones.

### 2) Versiones exactas en `package.json`

Las dependencias directas están fijadas con versión exacta (sin `^` ni `~`):

| Paquete | Versión fija | Tipo |
| --- | --- | --- |
| `astro` | 5.18.1 | runtime/build |
| `@tailwindcss/vite` | 4.1.18 | build |
| `tailwindcss` | 4.1.18 | build |

El `pnpm-lock.yaml` complementa esto fijando el grafo transitivo para instalaciones reproducibles.

### 3) Versión de herramienta fijada

`package.json` define:

```json
"packageManager": "pnpm@10.33.2"
```

Esto reduce diferencias de resolución por cambios de versión de pnpm entre entornos.

### 4) Política de actualización

- Evitar fixes automáticos que impliquen salto major sin validación.
- Preferir actualizaciones semver-safe y revisión manual.
- Actualizar una dependencia a la vez cuando sea posible.

---

## Operación recomendada

### Instalación limpia

```bash
pnpm install --frozen-lockfile
```

Falla si `package.json` y `pnpm-lock.yaml` están desincronizados.

### Build de verificación

```bash
pnpm build
```

### Auditoría de vulnerabilidades

```bash
pnpm audit
```

### Dependencias desactualizadas

```bash
pnpm outdated
```

### Binarios nativos legítimos (si aplica)

Para casos puntuales (ej. `esbuild`, `sharp`):

```bash
pnpm rebuild esbuild sharp
```

---

## Riesgos conocidos y límites actuales

- No existe aún un workflow dedicado de seguridad (audit/outdated) en CI; el workflow actual está orientado a build/deploy.
- Este proyecto depende del ecosistema npm/pnpm, por lo que sigue existiendo riesgo residual de supply chain en paquetes transitivos.
- Al ser un sitio estático, no maneja backend ni secretos de servidor en runtime, pero el riesgo durante instalación/build en la máquina de desarrollo sigue siendo relevante.
