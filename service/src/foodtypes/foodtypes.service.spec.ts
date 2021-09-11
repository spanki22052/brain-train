import { Test, TestingModule } from '@nestjs/testing';
import { FoodtypesService } from './foodtypes.service';

describe('FoodtypesService', () => {
  let service: FoodtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodtypesService],
    }).compile();

    service = module.get<FoodtypesService>(FoodtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
