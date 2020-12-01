import { Module } from '@nestjs/common';
import { RegistrantesModule } from 'src/registrantes/registrantes.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { DoctoresService } from 'src/doctores/doctores.service';
import { DoctoresModule } from 'src/doctores/doctores.module';

@Module({
  imports: [RegistrantesModule, PassportModule, DoctoresModule],
  providers: [AuthService, LocalStrategy, SessionSerializer, DoctoresService]
})
export class AuthModule {}
