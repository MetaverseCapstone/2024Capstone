import { Injectable } from '@nestjs/common';
import { CreateAssetcategoryDto } from './dto/create-assetcategory.dto';
import { UpdateAssetcategoryDto } from './dto/update-assetcategory.dto';

@Injectable()
export class AssetcategorysService {
  create(createAssetcategoryDto: CreateAssetcategoryDto) {
    return 'This action adds a new assetcategory';
  }

  findAll() {
    return `This action returns all assetcategorys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assetcategory`;
  }

  update(id: number, updateAssetcategoryDto: UpdateAssetcategoryDto) {
    return `This action updates a #${id} assetcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetcategory`;
  }
}
