# Prueba tecnica para Identidadtech (FRONTEND)

## Prerequisitos

- Bun

## Para instalar dependencias

```sh
bun i
```

## Para ejecutar entorno de desarrollo

```sh
bun run dev
```

abrir: <http://localhost:5173>

## Para desplegar

```sh
bun run build
```

Ejecutar en servidor:

```sh
bun dist/_worker.js
```

O usando Wrangler para Github pages con la cuenta configurada:

```sh
bunx wrangler pages deploy dist
```
