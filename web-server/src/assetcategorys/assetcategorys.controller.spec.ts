import { Test, TestingModule } from '@nestjs/testing';
import { AssetcategorysController } from './assetcategorys.controller';
import { AssetcategorysService } from './assetcategorys.service';

describe('AssetcategorysController', () => {
  let controller: AssetcategorysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetcategorysController],
      providers: [AssetcategorysService],
    }).compile();

    controller = module.get<AssetcategorysController>(AssetcategorysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
