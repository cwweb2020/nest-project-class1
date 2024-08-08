import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Lamborghini',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brandChosen = this.brands.find((brand) => brand.id === id);
    if (!brandChosen) throw new NotFoundException(`Brand not found`);

    return brandChosen;
    // return `This action returns a #${id} brand`;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    const updatedBrand = {
      ...brand,
      name: updateBrandDto.name,
      updatedAt: new Date().getTime(),
    };

    this.brands = this.brands.map((brand) =>
      brand.id === id ? updatedBrand : brand,
    );
    return updateBrandDto;
  }

  remove(id: string) {
    this.findOne(id);

    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
