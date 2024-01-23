import { Test, TestingModule } from '@nestjs/testing';
import { AssetstylesService } from './assetstyles.service';

describe('AssetstylesService', () => {
  let service: AssetstylesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetstylesService],
    }).compile();

    service = module.get<AssetstylesService>(AssetstylesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
