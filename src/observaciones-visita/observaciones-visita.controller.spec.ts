import { Test, TestingModule } from '@nestjs/testing';
import { ObservacionesVisitaController } from './observaciones-visita.controller';

describe('ObservacionesVisitaController', () => {
  let controller: ObservacionesVisitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservacionesVisitaController],
    }).compile();

    controller = module.get<ObservacionesVisitaController>(ObservacionesVisitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
