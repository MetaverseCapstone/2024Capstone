import { Test, TestingModule } from '@nestjs/testing';
import { AssetstylesController } from './assetstyles.controller';
import { AssetstylesService } from './assetstyles.service';

describe('AssetstylesController', () => {
  let controller: AssetstylesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetstylesController],
      providers: [AssetstylesService],
    }).compile();

    controller = module.get<AssetstylesController>(AssetstylesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
