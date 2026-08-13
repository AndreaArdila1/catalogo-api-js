<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">API de inventario y catálogo de productos construida con <a href="http://nodejs.org" target="_blank">Node.js</a>, <a href="https://nestjs.com" target="_blank">NestJS</a> y <a href="https://www.prisma.io" target="_blank">Prisma</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

## Descripción

API RESTful para gestión de inventario y catálogo de productos, desarrollada con NestJS y Prisma ORM. Permite administrar productos, categorías y gestionar el ciclo de vida de pedidos en un entorno de e-commerce.

### Características principales

- **Gestión de productos**: Crear, listar y consultar productos con precios, stock y categorías
- **Sistema de categorías**: Organizar productos en categorías para una mejor estructura
- **Modelo de pedidos**: Gestión completa de pedidos con estados (PENDIENTE, PAGADO, ENVIADO, ENTREGADO, CANCELADO)
- **Relaciones entre entidades**: Productos, categorías, usuarios y pedidos con relaciones definidas
- **Base de datos PostgreSQL**: Persistencia robusta con Prisma ORM

## Stack tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | NestJS v11 |
| ORM | Prisma v7 |
| Base de datos | PostgreSQL |
| Lenguaje | TypeScript 5.7 |
| Testing | Jest 30 + Supertest |

## Estructura del proyecto

```
src/
├── prisma/           # Servicio global de Prisma
├── productos/        # Módulo de productos (CRUD)
├── categorias/       # Módulo de categorías (CRUD)
├── app.module.ts     # Módulo raíz
└── main.ts           # Punto de entrada
```

### Modelo de datos

- **Usuarios**: id, nombre, email, fecha de creación
- **Categorías**: id, nombre, fecha de creación
- **Productos**: id, nombre, descripción, precio, stock, categoría asociada
- **Pedidos**: id, estado (enum), total, usuario, fecha de creación
- **Detalles de Pedido**: cantidad, precio unitario, pedido, producto

## Configuración del proyecto

### Prerrequisitos

- Node.js (v18 o superior)
- PostgreSQL
- npm

### Instalación

```bash
# Instalar dependencias
$ npm install

# Configurar variables de entorno
# Copiar .env.example a .env y configurar la conexión a PostgreSQL
$ cp .env.example .env

# Ejecutar migraciones de base de datos
$ npx prisma migrate dev
```

### Variables de entorno

Configurar en el archivo `.env`:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/catalogo_db"
```

## Ejecutar el proyecto

```bash
# modo desarrollo
$ npm run start:dev

# modo producción
$ npm run start:prod
```

## Ejecutar tests

```bash
# tests unitarios
$ npm run test

# tests end-to-end
$ npm run test:e2e

# cobertura de tests
$ npm run test:cov
```

## API Endpoints

### Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/productos` | Crear un nuevo producto |
| GET | `/productos` | Obtener todos los productos |
| GET | `/productos/:id` | Obtener un producto por ID |

### Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/categorias` | Crear una nueva categoría |
| GET | `/categorias` | Obtener todas las categorías |

## Desarrollo

### Comandos útiles

```bash
# Generar cliente Prisma
$ npx prisma generate

# Abrir Prisma Studio (GUI para explorar la base de datos)
$ npx prisma studio

# Ver estructura de la base de datos
$ npx prisma db pull
```

### Documentación

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## License

Este proyecto está bajo la licencia MIT.
