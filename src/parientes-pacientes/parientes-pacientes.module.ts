import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParientesPacientesController } from './parientes-pacientes.controller';
import { ParientesPacientesEntity } from './parientes-pacientes.entity';
import { ParientesPacientesService } from './parientes-pacientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParientesPacientesEntity])],
  exports: [ParientesPacientesService],
  controllers: [ParientesPacientesController],
  providers: [ParientesPacientesService]
})
export class ParientesPacientesModule {}
