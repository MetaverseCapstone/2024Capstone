import { Module } from '@nestjs/common';
import { AssetstylesService } from './assetstyles.service';
import { AssetstylesController } from './assetstyles.controller';

@Module({
  controllers: [AssetstylesController],
  providers: [AssetstylesService]
})
export class AssetstylesModule {}
