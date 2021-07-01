import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>) {
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.categoryRepository.create(createCategoryDto);

    return this.categoryRepository.save(newCategory);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOneOrFail(id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryRepository.save({ id, ...updateCategoryDto })
  }

  async remove(id: number): Promise<Category> {
    const categoryToDelete = await this.categoryRepository.findOne(id)

    return this.categoryRepository.remove(categoryToDelete)
  }
}
