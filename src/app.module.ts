import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosPersonalesModule } from './datos-personales/datos-personales.module';
import { DoctoresModule } from './doctores/doctores.module';
import { RegistrantesModule } from './registrantes/registrantes.module';
import { VisitasMedicasModule } from './visitas-medicas/visitas-medicas.module';
import { PacientesContagiadosModule } from './pacientes-contagiados/pacientes-contagiados.module';
import { RecetaMedicaModule } from './receta-medica/receta-medica.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { ObservacionesVisitaModule } from './observaciones-visita/observaciones-visita.module';
import { ParientesPacientesModule } from './parientes-pacientes/parientes-pacientes.module';
import { AuthModule } from './auth/auth.module';
import { LaboratoriosModule } from './laboratorios/laboratorios.module';
import { ReservaModule } from './reserva/reserva.module';

import { DatosPersonalesEntity } from './datos-personales/datos-personales.entity';
import { DoctoresEntity } from './doctores/doctores.entity';
import { RegistrantesEntity } from './registrantes/registrantes.entity';
import { VisitasMedicasEntity } from './visitas-medicas/visitas-medicas.entity';
import { PacientesContagiadosEntity } from './pacientes-contagiados/pacientes-contagiados.entity';
import { RecetaMedicaEntity } from './receta-medica/receta-medica.entity';
import { MedicamentoEntity } from './medicamento/medicamento.entity';
import { ObservacionesVisitaEntity } from './observaciones-visita/observaciones-visita.entity';
import { ParientesPacientesEntity } from './parientes-pacientes/parientes-pacientes.entity';
import { LaboratoriosEntity } from './laboratorios/laboratorios.entity';
import { ReservaEntity } from './reserva/reserva.entity';

import { DatosPersonalesService } from './datos-personales/datos-personales.service';
import { DoctoresService } from './doctores/doctores.service';
import { MedicamentoService } from './medicamento/medicamento.service';
import { ObservacionesVisitaService } from './observaciones-visita/observaciones-visita.service';
import { PacientesContagiadosService } from './pacientes-contagiados/pacientes-contagiados.service';
import { RecetaMedicaService } from './receta-medica/receta-medica.service';
import { RegistrantesService } from './registrantes/registrantes.service';
import { VisitasMedicasService } from './visitas-medicas/visitas-medicas.service';
import { ParientesPacientesService } from './parientes-pacientes/parientes-pacientes.service';
import { LaboratoriosService } from './laboratorios/laboratorios.service';
import { ReservaService } from './reserva/reserva.service';

import { DatosPersonalesController } from './datos-personales/datos-personales.controller';
import { DoctoresController } from './doctores/doctores.controller';
import { MedicamentoController } from './medicamento/medicamento.controller';
import { ObservacionesVisitaController } from './observaciones-visita/observaciones-visita.controller';
import { PacientesContagiadosController } from './pacientes-contagiados/pacientes-contagiados.controller';
import { RecetaMedicaController } from './receta-medica/receta-medica.controller';
import { RegistrantesController } from './registrantes/registrantes.controller';
import { VisitasMedicasController } from './visitas-medicas/visitas-medicas.controller';
import { ParientesPacientesController } from './parientes-pacientes/parientes-pacientes.controller';
import { LaboratoriosController } from './laboratorios/laboratorios.controller';
import { ReservaController } from './reserva/reserva.controller';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ruby.db.elephantsql.com',
    port: 5432,
    username: 'osfrohkj',
    password: 'ug-uMIFUCI-82acQmqJwIFaGePOdlLmG',
    database: 'osfrohkj',
    entities: [DatosPersonalesEntity,
      DoctoresEntity,
      RegistrantesEntity,
      VisitasMedicasEntity,
      PacientesContagiadosEntity,
      RecetaMedicaEntity,
      MedicamentoEntity,
      ObservacionesVisitaEntity,
      ParientesPacientesEntity,
      LaboratoriosEntity,
      ReservaEntity],
    synchronize: true,
    logging: true
  }),
    DatosPersonalesModule, 
    DoctoresModule, 
    RegistrantesModule, 
    VisitasMedicasModule, 
    PacientesContagiadosModule, 
    RecetaMedicaModule, 
    MedicamentoModule, 
    Repository,
    ObservacionesVisitaModule,
    ParientesPacientesModule,
    LaboratoriosModule,
    AuthModule,
    ReservaModule],

  controllers: [AppController,
    DatosPersonalesController,
    DoctoresController,
    MedicamentoController,
    ObservacionesVisitaController,
    PacientesContagiadosController,
    RecetaMedicaController,
    RegistrantesController,
    VisitasMedicasController,
    ParientesPacientesController,
    LaboratoriosController,
    ReservaController],
  
  providers: [AppService,
    DatosPersonalesService,
    DoctoresService,
  PacientesContagiadosService],
})
export class AppModule {}
