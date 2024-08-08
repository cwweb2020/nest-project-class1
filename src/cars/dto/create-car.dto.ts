//

import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' })
  readonly brand: string;

  @IsString({ message: 'Category must be a string' })
  readonly category: string;
}
