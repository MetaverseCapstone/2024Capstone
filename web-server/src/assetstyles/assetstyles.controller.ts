import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetstylesService } from './assetstyles.service';
import { CreateAssetstyleDto } from './dto/create-assetstyle.dto';
import { UpdateAssetstyleDto } from './dto/update-assetstyle.dto';

@Controller('assetstyles')
export class AssetstylesController {
  constructor(private readonly assetstylesService: AssetstylesService) {}

  @Post()
  create(@Body() createAssetstyleDto: CreateAssetstyleDto) {
    return this.assetstylesService.create(createAssetstyleDto);
  }

  @Get()
  findAll() {
    return this.assetstylesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetstylesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetstyleDto: UpdateAssetstyleDto) {
    return this.assetstylesService.update(+id, updateAssetstyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetstylesService.remove(+id);
  }
}
