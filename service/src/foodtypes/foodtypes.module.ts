import { Module } from '@nestjs/common';
import { FoodtypesController } from './foodtypes.controller';
import { FoodtypesService } from './foodtypes.service';
import { FoodtypesResolver } from './foodtypes.resolver';

@Module({
  controllers: [FoodtypesController],
  providers: [FoodtypesService, FoodtypesResolver]
})
export class FoodtypesModule {}
