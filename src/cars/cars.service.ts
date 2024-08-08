import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'mercedes', category: 'deportivo' },
    { id: uuid(), brand: 'alfa romeo', category: 'clasic' },
    { id: uuid(), brand: 'bugaty', category: 'clasic' },
  ];

  public findAll() {
    return this.cars;
  }

  public findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`car with id: ${id} does not exist`);

    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);
    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carChosen = this.findOne(id);

    carChosen = {
      ...carChosen,
      ...updateCarDto,
      id,
    };

    this.cars = this.cars.map((car) => (car.id === id ? carChosen : car));

    return carChosen; // car actualizado
  }

  public delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
