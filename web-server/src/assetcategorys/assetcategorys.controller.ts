import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AssetcategorysService } from './assetcategorys.service';
import { CreateAssetcategoryDto } from './dto/create-assetcategory.dto';
import { UpdateAssetcategoryDto } from './dto/update-assetcategory.dto';

@Controller('assetcategorys')
export class AssetcategorysController {
  constructor(private readonly assetcategorysService: AssetcategorysService) { }

  @Post()
  createAssetCategory(
    @Body() createAssetcategoryDto: CreateAssetcategoryDto
  ) {
    return this.assetcategorysService.createAssetCategory(createAssetcategoryDto);
  }

  @Get()
  findAllAssetCategoryEnable() {
    return this.assetcategorysService.findAllAssetCategoryEnable();
  }

  @Get('all')
  findAllAssetCategory() {
    return this.assetcategorysService.findAllAssetCategory();
  }

  //카테고리 페이징
  @Get('admin')
  findAdminAllAssetCategory(
    @Query('page') page: string,
    @Query('take') take: string,
    @Query('searchType') searchType: string,
    @Query('searchText') searchText: string,
  ) {
    return this.assetcategorysService.findAdminAllAssetCategory(
      +page,
      +take,
      searchType,
      searchText,
    );
  }

  @Get('admin/child/:parentId')
  findAdminChildAssetCategory(
    @Param('parentId') parentId: string
  ) {
    return this.assetcategorysService.findAdminChildAssetCategory(+parentId);
  }

  @Get('child/:parentId')
  findChildAssetCategory(
    @Param('parentId') parentId: string
  ) {
    return this.assetcategorysService.findChildAssetCategory(+parentId);
  }

  @Get('category/:code')
  findAssetCategoryByCode(@Param('code') code: string) {
    return this.assetcategorysService.findAssetCategoryByCode(code);
  }

  @Get(':id')
  findAssetCategoryOne(@Param('id') id: string) {
    return this.assetcategorysService.findAssetCategoryOne(+id);
  }

  @Patch('disable/:id')
  updateAssetCategoryDisalbe(@Param('id') id: string, @Query('isDisable') isDisable?: string) {
    return this.assetcategorysService.updateAssetCategoryDisalbe(+id, Boolean(JSON.parse(isDisable)));
  }

  @Patch(':id')
  updateAssetCategory(@Param('id') id: string, @Body() updateAssetcategoryDto: UpdateAssetcategoryDto) {
    return this.assetcategorysService.updateAssetCategory(+id, updateAssetcategoryDto);
  }

  @Delete(':id')
  removeAssetCategory(@Param('id') id: string) {
    return this.assetcategorysService.removeAssetCategory(+id);
  }
}
