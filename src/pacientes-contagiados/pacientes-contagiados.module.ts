import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesContagiadosController } from './pacientes-contagiados.controller';
import { PacientesContagiadosEntity } from './pacientes-contagiados.entity';
import { PacientesContagiadosService } from './pacientes-contagiados.service';

@Module({
  imports: [TypeOrmModule.forFeature([PacientesContagiadosEntity])],
  exports: [PacientesContagiadosService],
  controllers: [PacientesContagiadosController],
  providers: [PacientesContagiadosService]
})
export class PacientesContagiadosModule {}
