import { Test, TestingModule } from '@nestjs/testing';
import { ObservacionesVisitaService } from './observaciones-visita.service';

describe('ObservacionesVisitaService', () => {
  let service: ObservacionesVisitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObservacionesVisitaService],
    }).compile();

    service = module.get<ObservacionesVisitaService>(ObservacionesVisitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
