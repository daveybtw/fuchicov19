import { Test, TestingModule } from '@nestjs/testing';
import { RegistrantesService } from './registrantes.service';

describe('RegistrantesService', () => {
  let service: RegistrantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrantesService],
    }).compile();

    service = module.get<RegistrantesService>(RegistrantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
