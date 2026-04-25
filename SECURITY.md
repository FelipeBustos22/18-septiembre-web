# Security Policy

## Supported Versions

Este proyecto mantiene dependencias bloqueadas y lockfile versionado para mejorar reproducibilidad.

| Branch | Soporte de seguridad |
| --- | --- |
| `main` | Sí |

## Reportar una vulnerabilidad

Si encuentras una vulnerabilidad, **no** abras un issue público. Usa **GitHub Security Advisories** ("Report a vulnerability") o contacta al mantenedor del repositorio por un canal privado con:

- descripción del problema
- impacto esperado
- pasos de reproducción
- versión/commit afectado

Se intentará confirmar recepción y triage inicial en un plazo razonable.

## Política de supply chain (npm)

- Se evita `npm audit fix --force` en cambios rutinarios.
- Se prefieren actualizaciones semver-safe.
- `ignore-scripts=true` queda activo por defecto en `.npmrc`.
- Las excepciones para binarios nativos confiables se aplican con `npm rebuild` explícito.
