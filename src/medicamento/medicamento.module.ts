import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentoController } from './medicamento.controller';
import { MedicamentoEntity } from './medicamento.entity';
import { MedicamentoService } from './medicamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicamentoEntity])],
  exports: [MedicamentoService],
  controllers: [MedicamentoController],
  providers: [MedicamentoService]
})
export class MedicamentoModule {}
