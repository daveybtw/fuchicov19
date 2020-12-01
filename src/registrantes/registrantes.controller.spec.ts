import { Test, TestingModule } from '@nestjs/testing';
import { RegistrantesController } from './registrantes.controller';

describe('RegistrantesController', () => {
  let controller: RegistrantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrantesController],
    }).compile();

    controller = module.get<RegistrantesController>(RegistrantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
