import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitasMedicasController } from './visitas-medicas.controller';
import { VisitasMedicasEntity } from './visitas-medicas.entity';
import { VisitasMedicasService } from './visitas-medicas.service';

@Module({
  imports: [TypeOrmModule.forFeature([VisitasMedicasEntity])],
  exports: [VisitasMedicasService],
  controllers: [VisitasMedicasController],
  providers: [VisitasMedicasService]
})
export class VisitasMedicasModule {}
