import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductInput } from './dto/product.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}
  @Query((returns) => [Product])
  showAll() {
    return this.productsService.findAll();
  }

  @Mutation((returns) => Product)
  createProduct(@Args('product') product: ProductInput) {
    return this.productsService.createProduct(product);
  }

  @Mutation((returns) => Boolean)
  removeProduct(@Args('id') id: string) {
    this.productsService.removeProduct(id);
    return true;
  }

  @Query((returns) => Product)
  findById(@Args('id') id: string) {
    return this.productsService.findById(id);
  }
}
