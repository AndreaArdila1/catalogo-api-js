import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CrearProductoInput = {
  nombre: string;
  descripcion?: string; // ?: significa que el campo es opcional
  precio: number;
  stock: number;
  categoriaId: number;
};

type ActualizarProductoInput = {
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
  categoriaId?: number;
};

// @Injectable es un decorador que marca la clase como un proveedor que puede ser inyectado en otros componentes de NestJS.
@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  // El include: { categoria: true } se utiliza para incluir la relación de categoría en la respuesta.
  crear(datos: CrearProductoInput) {
    return this.prisma.producto.create({
      data: datos,
      include: { categoria: true },
    });
  }

  obtenerTodos() {
    return this.prisma.producto.findMany({
      include: { categoria: true },
      orderBy: { id: 'asc' },
    });
  }

  obtenerPorId(id: number) {
    return this.prisma.producto.findUnique({
      where: { id },
      include: { categoria: true },
    });
  }

  actualizar(id: number, datos: ActualizarProductoInput) {
    return this.prisma.producto.update({
      where: { id },
      data: datos,
      include: { categoria: true },
    });
  }

  eliminar(id: number) {
    return this.prisma.producto.delete({
      where: { id },
    });
  }
}