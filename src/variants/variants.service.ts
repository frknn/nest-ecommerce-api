import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { Variant } from './entities/variant.entity';

@Injectable()
export class VariantsService {
  constructor(
    @InjectRepository(Variant)
    private readonly variantRepository: Repository<Variant>
  ) { }

  async create(createVariantDto: CreateVariantDto, productId: number): Promise<Variant> {
    const newVariant = await this.variantRepository.create(
      {
        productId,
        ...createVariantDto
      }
    );

    return this.variantRepository.save(newVariant);
  }


  findAll(productId: number): Promise<Variant[]> {
    return this.variantRepository.find({ where: { productId } });
  }

  findOne(productId: number, variantId: number): Promise<Variant> {
    return this.variantRepository.findOneOrFail(variantId, { where: { productId } });
  }

  update(id: number, updateVariantDto: UpdateVariantDto): Promise<Variant> {
    return this.variantRepository.save({ id, ...updateVariantDto });
  }

  async remove(productId: number, variantId: number): Promise<Variant> {
    const variantToDelete = await this.findOne(variantId, productId);

    return this.variantRepository.remove(variantToDelete);
  }
}
