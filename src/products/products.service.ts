import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = await this.productRepository.create(createProductDto);

    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneOrFail(id)
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productRepository.save({id, ...updateProductDto})
  }

  async remove(id: number): Promise<Product> {
    const productToDelete = await this.productRepository.findOne(id)

    return this.productRepository.remove(productToDelete)
  }
}
