import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsNumber()
  @Type(() => Number)
  price: number;
}
