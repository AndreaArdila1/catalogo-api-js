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

API RESTful para gestión de inventario y catálogo de productos, desarrollada con NestJS y Prisma ORM. Permite administrar productos, categorías, usuarios y gestionar el ciclo de vida de pedidos en un entorno de e-commerce.

### Características principales

- **Gestión de productos**: CRUD completo con precios, stock y categorías
- **Sistema de categorías**: CRUD completo para organizar productos
- **Gestión de usuarios**: CRUD completo con validación de email único
- **Modelo de pedidos**: Gestión completa con estados (PENDIENTE, PAGADO, ENVIADO, ENTREGADO, CANCELADO)
- **Relaciones entre entidades**: Productos, categorías, usuarios y pedidos con relaciones definidas
- **Swagger**: Documentación interactiva de la API disponible en `/docs`
- **Validación**: DTOs con class-validator para garantizar integridad de datos
- **Filtros de excepciones**: Manejo centralizado de errores de Prisma

## Stack tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | NestJS v11 |
| ORM | Prisma v7 |
| Base de datos | PostgreSQL |
| Lenguaje | TypeScript 5.7 |
| Documentación API | Swagger v11 |
| Validación | class-validator + class-transformer |
| Testing | Jest 30 + Supertest |

## Estructura del proyecto

```
src/
├── prisma/           # Servicio global de Prisma + filtro de excepciones
├── productos/        # Módulo de productos (CRUD)
├── categorias/       # Módulo de categorías (CRUD)
├── usuarios/         # Módulo de usuarios (CRUD)
├── app.module.ts     # Módulo raíz
├── app.controller.ts # Controlador raíz
├── app.service.ts    # Servicio raíz
└── main.ts           # Punto de entrada (Swagger, ValidationPipe)
```

### Modelo de datos

- **Usuarios**: id, nombre, email (único), fecha de creación
- **Categorías**: id, nombre (único), fecha de creación
- **Productos**: id, nombre, descripción, precio (Decimal 12,2), stock, categoría asociada
- **Pedidos**: id, estado (enum), total, usuario, fecha de creación
- **Detalles de Pedido**: cantidad, precio unitario, pedido, producto (único por pedido)

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

# Generar cliente Prisma
$ npx prisma generate
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

La API estará disponible en `http://localhost:3000`

## Documentación Swagger

Una vez ejecutado el proyecto, la documentación interactiva de la API está disponible en:

```
http://localhost:3000/docs
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
| PATCH | `/productos/:id` | Actualizar un producto |
| DELETE | `/productos/:id` | Eliminar un producto |

### Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/categorias` | Crear una nueva categoría |
| GET | `/categorias` | Obtener todas las categorías |
| GET | `/categorias/:id` | Obtener una categoría por ID |
| PATCH | `/categorias/:id` | Actualizar una categoría |
| DELETE | `/categorias/:id` | Eliminar una categoría |

### Usuarios

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/usuarios` | Crear un nuevo usuario |
| GET | `/usuarios` | Obtener todos los usuarios |
| GET | `/usuarios/:id` | Obtener un usuario por ID |
| PATCH | `/usuarios/:id` | Actualizar un usuario |
| DELETE | `/usuarios/:id` | Eliminar un usuario |

## Desarrollo

### Comandos útiles

```bash
# Generar cliente Prisma
$ npx prisma generate

# Abrir Prisma Studio (GUI para explorar la base de datos)
$ npx prisma studio

# Ver estructura de la base de datos
$ npx prisma db pull

# Formatear código
$ npm run format

# Lint
$ npm run lint
```

### Documentación

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Swagger](https://swagger.io/docs/)

## License

Este proyecto está bajo la licencia MIT.
