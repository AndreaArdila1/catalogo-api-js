import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { ActualizarProductoDto } from './dto/actualizar-producto.dto';

// type CrearProductoBody = {
//   nombre: string;
//   descripcion?: string;
//   precio: number;
//   stock: number;
//   categoriaId: number;
// };

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  // @Body significa que el parámetro 'body' se llenará con los datos del cuerpo de la solicitud HTTP.
  crear(@Body() body: CrearProductoDto) {
    return this.productosService.crear(body);
  }

  @Get()
  obtenerTodos() {
    return this.productosService.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.obtenerPorId(id);
  }

  @Patch(':id')
  actualizar(
    // El parseIntPipe se utiliza para convertir el parámetro de ruta 'id' a un número entero. 
    // Esto es útil para asegurarse de que el valor recibido sea del tipo esperado.
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ActualizarProductoDto,
  ) {
    return this.productosService.actualizar(id, body);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.eliminar(id);
  }
}