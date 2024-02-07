import { Module } from '@nestjs/common';
import { AssetcategorysService } from './assetcategorys.service';
import { AssetcategorysController } from './assetcategorys.controller';

@Module({
  controllers: [AssetcategorysController],
  providers: [AssetcategorysService]
})
export class AssetcategorysModule {}
