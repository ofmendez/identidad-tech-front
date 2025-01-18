# Prueba tecnica para Identidadtech (FRONTEND)

## Publicado en

[identidad-tech-front.pages.dev](https://identidad-tech-front.pages.dev/)

Archivo .csv para subir:
[devices.csv](https://raw.githubusercontent.com/ofmendez/prueba-identidad-tech-back/refs/heads/main/src/test/devices.csv)

## Desarrollo

### Prerequisitos

- Bun

### Para instalar dependencias

```sh
bun i
```

### Para ejecutar entorno de desarrollo

```sh
bun run dev
```

abrir: <http://localhost:5173>

### Para desplegar

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
