import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosPersonalesController } from './datos-personales.controller';
import { DatosPersonalesService } from './datos-personales.service';
import { DatosPersonalesEntity } from './datos-personales.entity';
import { PacientesContagiadosEntity } from 'src/pacientes-contagiados/pacientes-contagiados.entity';
import { PacientesContagiadosController } from 'src/pacientes-contagiados/pacientes-contagiados.controller';
import { PacientesContagiadosService } from 'src/pacientes-contagiados/pacientes-contagiados.service';
@Module({
  imports: [TypeOrmModule.forFeature([DatosPersonalesEntity, PacientesContagiadosEntity])],
  exports: [TypeOrmModule],
  controllers: [DatosPersonalesController, PacientesContagiadosController],
  providers: [DatosPersonalesService, PacientesContagiadosService]
})
export class DatosPersonalesModule {}
