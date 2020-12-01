import { Test, TestingModule } from '@nestjs/testing';
import { ParientesPacientesController } from './parientes-pacientes.controller';

describe('ParientesPacientesController', () => {
  let controller: ParientesPacientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParientesPacientesController],
    }).compile();

    controller = module.get<ParientesPacientesController>(ParientesPacientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
