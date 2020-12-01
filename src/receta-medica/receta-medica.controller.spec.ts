import { Test, TestingModule } from '@nestjs/testing';
import { RecetaMedicaController } from './receta-medica.controller';

describe('RecetaMedicaController', () => {
  let controller: RecetaMedicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaMedicaController],
    }).compile();

    controller = module.get<RecetaMedicaController>(RecetaMedicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
