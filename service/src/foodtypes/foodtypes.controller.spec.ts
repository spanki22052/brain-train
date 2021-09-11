import { Test, TestingModule } from '@nestjs/testing';
import { FoodtypesController } from './foodtypes.controller';

describe('FoodtypesController', () => {
  let controller: FoodtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodtypesController],
    }).compile();

    controller = module.get<FoodtypesController>(FoodtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
