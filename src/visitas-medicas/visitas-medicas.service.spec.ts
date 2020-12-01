import { Test, TestingModule } from '@nestjs/testing';
import { VisitasMedicasService } from './visitas-medicas.service';

describe('VisitasMedicasService', () => {
  let service: VisitasMedicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitasMedicasService],
    }).compile();

    service = module.get<VisitasMedicasService>(VisitasMedicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
