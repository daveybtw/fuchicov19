import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoriosController } from './laboratorios.controller';

describe('LaboratoriosController', () => {
  let controller: LaboratoriosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaboratoriosController],
    }).compile();

    controller = module.get<LaboratoriosController>(LaboratoriosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
