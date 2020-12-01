import { Test, TestingModule } from '@nestjs/testing';
import { PacientesContagiadosService } from './pacientes-contagiados.service';

describe('PacientesContagiadosService', () => {
  let service: PacientesContagiadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacientesContagiadosService],
    }).compile();

    service = module.get<PacientesContagiadosService>(PacientesContagiadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
