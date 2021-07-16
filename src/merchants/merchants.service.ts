import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { Merchant } from './entities/merchant.entity';

@Injectable(
)
export class MerchantsService {
  constructor(
    @InjectRepository(Merchant)
    private readonly merchantRepository: Repository<Merchant>
  ) { }

  async create(createMerchantDto: CreateMerchantDto): Promise<Merchant> {
    const merchant = await this.merchantRepository.findOne({ where: { email: createMerchantDto.email } })
    if (merchant) {
      throw new BadRequestException("Bu email adresi kullanımda");
    }
    const newMerchant = await this.merchantRepository.create(createMerchantDto)
    return this.merchantRepository.save(newMerchant)
  }

  findAll(): Promise<Merchant[]> {
    return this.merchantRepository.find()
  }

  findOne(id: number): Promise<Merchant> {
    return this.merchantRepository.findOneOrFail(id)
  }

  async findOneByEmail(email: string): Promise<Merchant> {
    const merchant = await this.merchantRepository.findOne({ where: { email } });

    if (!merchant) {
      throw new NotFoundException("Bu email adresine kayıtlı bir dükkan bulunamadı")
    }

    return merchant;
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto): Promise<Merchant> {
    return this.merchantRepository.save({ id, ...updateMerchantDto })
  }

  async remove(id: number): Promise<Merchant> {
    const merchantToRemove = await this.findOne(id)

    return this.merchantRepository.remove(merchantToRemove)
  }
}
