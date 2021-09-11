import { Resolver, Query } from '@nestjs/graphql';
import { FoodtypesService } from './foodtypes.service';

@Resolver()
export class FoodtypesResolver {
  constructor(private readonly foodtypesService: FoodtypesService) {}

  @Query((returns) => [String])
  foodtypes() {
    return this.foodtypesService.returnFoodTypes();
  }
}
