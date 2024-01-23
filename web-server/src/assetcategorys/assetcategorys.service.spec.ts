import { Test, TestingModule } from '@nestjs/testing';
import { AssetcategorysService } from './assetcategorys.service';

describe('AssetcategorysService', () => {
  let service: AssetcategorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetcategorysService],
    }).compile();

    service = module.get<AssetcategorysService>(AssetcategorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
