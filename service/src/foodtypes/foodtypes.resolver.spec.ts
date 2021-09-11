import { Test, TestingModule } from '@nestjs/testing';
import { FoodtypesResolver } from './foodtypes.resolver';

describe('FoodtypesResolver', () => {
  let resolver: FoodtypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodtypesResolver],
    }).compile();

    resolver = module.get<FoodtypesResolver>(FoodtypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
