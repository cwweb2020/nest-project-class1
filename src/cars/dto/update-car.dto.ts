//

import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsOptional()
  @IsString({ message: 'Brand must be a string' })
  readonly brand?: string;

  @IsOptional()
  @IsString({ message: 'Category must be a string' })
  readonly category?: string;
}
