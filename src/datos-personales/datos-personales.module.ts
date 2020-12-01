import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosPersonalesController } from './datos-personales.controller';
import { DatosPersonalesService } from './datos-personales.service';
import { DatosPersonalesEntity } from './datos-personales.entity';
@Module({
  imports: [TypeOrmModule.forFeature([DatosPersonalesEntity])],
  exports: [TypeOrmModule],
  controllers: [DatosPersonalesController],
  providers: [DatosPersonalesService]
})
export class DatosPersonalesModule {}
