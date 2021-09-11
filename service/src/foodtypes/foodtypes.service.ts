import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodtypesService {
  returnFoodTypes(): string[] {
    return [
      'Котлеты',
      'Супы',
      'Жаркое',
      'Напитки',
      'Гарниры',
      'Салаты',
      'Десерты',
    ];
  }
}
