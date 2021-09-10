import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductInput } from './dto/product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private product: Repository<Product>) { }

    async findAll(): Promise<Product[]> {
        console.log(this.product.find())
        return this.product.find()
    }

    createProduct(body : ProductInput) {
        return this.product.save(body)
    }

    async findById(id: string) : Promise<Product> {
        return this.product.findOne(id)
    }

    removeProduct(id: string) {
        return this.product.delete(id)
    }

}