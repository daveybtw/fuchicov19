import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosPersonalesEntity } from 'src/datos-personales/datos-personales.entity';
import { DatosPersonalesService } from 'src/datos-personales/datos-personales.service';
import { RegistrantesController } from './registrantes.controller';
import { RegistrantesEntity } from './registrantes.entity';
import { RegistrantesService } from './registrantes.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrantesEntity])],
  exports: [RegistrantesService],
  controllers: [RegistrantesController],
  providers: [RegistrantesService]
})
export class RegistrantesModule {}
