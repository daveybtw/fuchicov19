import { Test, TestingModule } from '@nestjs/testing';
import { ParientesPacientesService } from './parientes-pacientes.service';

describe('ParientesPacientesService', () => {
  let service: ParientesPacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParientesPacientesService],
    }).compile();

    service = module.get<ParientesPacientesService>(ParientesPacientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
