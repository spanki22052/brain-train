import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) { }

    @Get()
    showAll() {
        return this.productService.findAll()
    }

    @Post()
    create(@Body() body) {
        return this.productService.createProduct(body)
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.productService.removeProduct(id)
    }
}
