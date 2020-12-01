import { Test, TestingModule } from '@nestjs/testing';
import { PacientesContagiadosController } from './pacientes-contagiados.controller';

describe('PacientesContagiadosController', () => {
  let controller: PacientesContagiadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacientesContagiadosController],
    }).compile();

    controller = module.get<PacientesContagiadosController>(PacientesContagiadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
