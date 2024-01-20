import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetcategorysService } from './assetcategorys.service';
import { CreateAssetcategoryDto } from './dto/create-assetcategory.dto';
import { UpdateAssetcategoryDto } from './dto/update-assetcategory.dto';

@Controller('assetcategorys')
export class AssetcategorysController {
  constructor(private readonly assetcategorysService: AssetcategorysService) {}

  @Post()
  create(@Body() createAssetcategoryDto: CreateAssetcategoryDto) {
    return this.assetcategorysService.create(createAssetcategoryDto);
  }

  @Get()
  findAll() {
    return this.assetcategorysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetcategorysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetcategoryDto: UpdateAssetcategoryDto) {
    return this.assetcategorysService.update(+id, updateAssetcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetcategorysService.remove(+id);
  }
}
