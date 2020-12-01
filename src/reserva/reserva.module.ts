import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { ReservaEntity } from './reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaEntity])],
  providers: [ReservaService],
  exports: [ReservaService],
  controllers: [ReservaController],
})

export class ReservaModule {}
