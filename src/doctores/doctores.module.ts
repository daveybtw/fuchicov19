import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctoresController } from './doctores.controller';
import { DoctoresService } from './doctores.service';
import { DoctoresEntity } from './doctores.entity';
import { DatosPersonalesEntity } from '../datos-personales/datos-personales.entity';
import { DatosPersonalesService } from '../datos-personales/datos-personales.service';
import { DatosPersonalesController } from '../datos-personales/datos-personales.controller';
@Module({
  imports: [TypeOrmModule.forFeature([DoctoresEntity])],
  exports: [TypeOrmModule],
  controllers: [DoctoresController],
  providers: [DoctoresService]
})
export class DoctoresModule {}
