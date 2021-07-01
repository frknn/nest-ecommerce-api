import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>
  ) { }

  async create(createAssetDto: CreateAssetDto): Promise<Asset> {
    const newAsset = await this.assetRepository.create(createAssetDto);
    return this.assetRepository.save(newAsset);
  }

  findAll(): Promise<Asset[]> {
    return this.assetRepository.find()
  }

  findOne(id: number): Promise<Asset> {
    return this.assetRepository.findOneOrFail(id)
  }

  update(id: number, updateAssetDto: UpdateAssetDto): Promise<Asset> {
    return this.assetRepository.save({ id, ...updateAssetDto });
  }

  async remove(id: number): Promise<Asset> {
    const assetToDelete = await this.assetRepository.findOne(id)

    return this.assetRepository.remove(assetToDelete)
  }
}
