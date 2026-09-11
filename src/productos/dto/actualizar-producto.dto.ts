import { PartialType } from '@nestjs/mapped-types';
import { CrearProductoDto } from './crear-producto.dto';

// PartialType es una función que toma un DTO y devuelve un nuevo DTO con todas las propiedades opcionales. 
// Esto es útil para crear DTOs de actualización, donde no se requiere que todas las propiedades estén presentes.
export class ActualizarProductoDto extends PartialType(CrearProductoDto) {}