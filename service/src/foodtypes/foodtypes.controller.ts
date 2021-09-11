import { Controller, Get } from '@nestjs/common';
import { FoodtypesService } from './foodtypes.service';

@Controller('foodtypes')
export class FoodtypesController {
  constructor(private readonly foodtypesService: FoodtypesService) {}

  @Get()
  returnFoodTypes() {
    return this.foodtypesService.returnFoodTypes();
  }
}
