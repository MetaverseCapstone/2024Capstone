import { Injectable } from '@nestjs/common';
import { CreateAssetstyleDto } from './dto/create-assetstyle.dto';
import { UpdateAssetstyleDto } from './dto/update-assetstyle.dto';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class AssetstylesService {
  constructor(private prisma: PrismaService) {}

  create(createAssetstyleDto: CreateAssetstyleDto) {
    return 'This action adds a new assetstyle';
  }

  findAll() {
    return `This action returns all assetstyles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assetstyle`;
  }

  update(id: number, updateAssetstyleDto: UpdateAssetstyleDto) {
    return `This action updates a #${id} assetstyle`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetstyle`;
  }
}
