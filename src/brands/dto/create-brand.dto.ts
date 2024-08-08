// espera la informacion que me manden por el post

//
import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MinLength(3)
  readonly name: string;
}
