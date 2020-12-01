import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObservacionesVisitaController } from './observaciones-visita.controller';
import { ObservacionesVisitaEntity } from './observaciones-visita.entity';
import { ObservacionesVisitaService } from './observaciones-visita.service';

@Module({
  imports: [TypeOrmModule.forFeature([ObservacionesVisitaEntity])],
  exports: [ObservacionesVisitaService],
  controllers: [ObservacionesVisitaController],
  providers: [ObservacionesVisitaService]
})
export class ObservacionesVisitaModule {}
