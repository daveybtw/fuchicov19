import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentoController } from 'src/medicamento/medicamento.controller';
import { MedicamentoEntity } from 'src/medicamento/medicamento.entity';
import { MedicamentoService } from 'src/medicamento/medicamento.service';
import { RecetaMedicaController } from './receta-medica.controller';
import { RecetaMedicaEntity } from './receta-medica.entity';
import { RecetaMedicaService } from './receta-medica.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecetaMedicaEntity])],
  exports: [RecetaMedicaService],
  controllers: [RecetaMedicaController],
  providers: [RecetaMedicaService]
})
export class RecetaMedicaModule {}
