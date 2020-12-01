import { Test, TestingModule } from '@nestjs/testing';
import { VisitasMedicasController } from './visitas-medicas.controller';

describe('VisitasMedicasController', () => {
  let controller: VisitasMedicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitasMedicasController],
    }).compile();

    controller = module.get<VisitasMedicasController>(VisitasMedicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
