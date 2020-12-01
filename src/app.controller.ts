import { Body, Controller, Get, Post, Request, Render, Param, Redirect, UseGuards, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';

import { AppService } from './app.service';
import { DatosPersonalesService } from './datos-personales/datos-personales.service';
import { DoctoresService } from './doctores/doctores.service';
import { ObservacionesVisitaService } from './observaciones-visita/observaciones-visita.service';
import { PacientesContagiadosService } from './pacientes-contagiados/pacientes-contagiados.service';
import { ParientesPacientesService } from './parientes-pacientes/parientes-pacientes.service';
import { RecetaMedicaService } from './receta-medica/receta-medica.service';
import { VisitasMedicasService } from './visitas-medicas/visitas-medicas.service';

import { LoginGuard } from './common/guards/login.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';
import { ReservaService } from './reserva/reserva.service';
import { MedicamentoService } from './medicamento/medicamento.service';
import { LaboratoriosService } from './laboratorios/laboratorios.service';

import { ObservacionesVisitaEntity } from './observaciones-visita/observaciones-visita.entity';
import { RegistrantesService } from './registrantes/registrantes.service';

@Controller('/')
@UseFilters(AuthExceptionFilter)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly obsServicio: ObservacionesVisitaService,
    private readonly recetaServicio: RecetaMedicaService,
    private readonly datosServicio: DatosPersonalesService,
    private readonly visitaServicio: VisitasMedicasService,
    private readonly doctorServicio: DoctoresService,
    private readonly pacienteServicio: PacientesContagiadosService,
    private readonly parientesSevicio: ParientesPacientesService,
    private readonly medicamentoServicio: MedicamentoService,
    private readonly LaboratorioServicio: LaboratoriosService,
    private readonly reservaServicio: ReservaService,
    private readonly registranteServicio: RegistrantesService
    ) {}
    
    @Get('/')
    @Render('index')
    index(@Request() req): { message: string } {
      return { message: req.flash('loginError') };
    }
    // :::::::::::::::::::::::::::::::::
    //    PACIENTE: VER VISITAS
    // :::::::::::::::::::::::::::::::::
    @UseGuards(AuthenticatedGuard)
    @Post('doctor/paciente')
    @Render('doctores/verVisitas')
    async getPacientes(@Request() req, @Body() parameters){
      var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
      const visitaServicio = await this.visitaServicio.findVisitaPaciente(parameters.paciente_id);
      console.log(visitaServicio);
      var arrayObservaciones = [];
      var arrayCompuesto = [];
      for(var i = 0; i < visitaServicio.length; i++){
          var observacionEncontrada = await this.obsServicio.findObservacion(visitaServicio[i].id_visita);
          var datosPaciente = await this.datosServicio.findDatosById(visitaServicio[i].id_paciente);
          var datosDoctor = await this.datosServicio.findDatosById(visitaServicio[i].id_doctor);
          var arraySimple = [];
          var recetaMedica = await this.recetaServicio.findReceta(visitaServicio[i].id_visita);
          var LaboratorioEncontrado = await this.LaboratorioServicio.findLab(recetaMedica[0].id_laboratorio);
          var MedicamentoEncontrado = await this.medicamentoServicio.findMedicamento(recetaMedica[0].id_medicamento);
          arraySimple["temperatura_paciente"] = visitaServicio[i].temperatura_paciente;
          arraySimple["presion_paciente"] = visitaServicio[i].presion_paciente;
          arraySimple["id_paciente"] = visitaServicio[i].id_paciente;
          arraySimple["id_doctor"] = visitaServicio[i].id_doctor;
          arraySimple["fecha_visita"] = visitaServicio[i].fecha_visita;
          arraySimple["observacion"] = observacionEncontrada[0].observaciones_visita;
          arraySimple["nombre_paciente"] = datosPaciente[0].pnombre_persona + " " + datosPaciente[0].snombre_persona + " "  + datosPaciente[0].papellido_persona + " " + datosPaciente[0].sapellido_persona;
          arraySimple["nombre_doctor"] = datosDoctor[0].pnombre_persona + " " + datosDoctor[0].snombre_persona + " "  + datosDoctor[0].papellido_persona + " " + datosDoctor[0].sapellido_persona;
          arraySimple["medicamento"] = MedicamentoEncontrado[0].nombre_medicamento;
          arraySimple["laboratorio"] = LaboratorioEncontrado[0].nombre_laboratorio;
          arraySimple["dosis"] = recetaMedica[0].dosis_recetada;
          arrayObservaciones.push(arraySimple);
      }
      arrayCompuesto["usuario"] = datosUser[0];
      arrayCompuesto["visitas"] = arrayObservaciones;
      return { message: arrayCompuesto};
    }
    // :::::::::::::::::::::::::::::::::
    //          VER VISITAS
    // :::::::::::::::::::::::::::::::::
    @UseGuards(AuthenticatedGuard)
    @Get('doctor/visitas')
    @Render('doctores/verVisitas')
    async getUser(@Request() req){
        var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
        const visitaServicio = await this.visitaServicio.findVisitaDoctor(1005890893);
        console.log(visitaServicio);
        var arrayObservaciones = [];
        var arrayCompuesto = [];
        for(var i = 0; i < visitaServicio.length; i++){
            var observacionEncontrada = await this.obsServicio.findObservacion(visitaServicio[i].id_visita);
            var datosPaciente = await this.datosServicio.findDatosById(visitaServicio[i].id_paciente);
            var datosDoctor = await this.datosServicio.findDatosById(visitaServicio[i].id_doctor);
            var arraySimple = [];
            var recetaMedica = await this.recetaServicio.findReceta(visitaServicio[i].id_visita);
            var LaboratorioEncontrado = await this.LaboratorioServicio.findLab(recetaMedica[0].id_laboratorio);
            var MedicamentoEncontrado = await this.medicamentoServicio.findMedicamento(recetaMedica[0].id_medicamento);
            console.log(LaboratorioEncontrado);
            console.log(MedicamentoEncontrado);
            arraySimple["temperatura_paciente"] = visitaServicio[i].temperatura_paciente;
            arraySimple["presion_paciente"] = visitaServicio[i].presion_paciente;
            arraySimple["id_paciente"] = visitaServicio[i].id_paciente;
            arraySimple["id_doctor"] = visitaServicio[i].id_doctor;
            arraySimple["fecha_visita"] = visitaServicio[i].fecha_visita;
            arraySimple["observacion"] = observacionEncontrada[0].observaciones_visita;
            arraySimple["nombre_paciente"] = datosPaciente[0].pnombre_persona + " " + datosPaciente[0].snombre_persona + " "  + datosPaciente[0].papellido_persona + " " + datosPaciente[0].sapellido_persona;
            arraySimple["nombre_doctor"] = datosDoctor[0].pnombre_persona + " " + datosDoctor[0].snombre_persona + " "  + datosDoctor[0].papellido_persona + " " + datosDoctor[0].sapellido_persona;
            arraySimple["medicamento"] = MedicamentoEncontrado[0].nombre_medicamento;
            arraySimple["laboratorio"] = LaboratorioEncontrado[0].nombre_laboratorio;
            arraySimple["dosis"] = recetaMedica[0].dosis_recetada;
            arrayObservaciones.push(arraySimple);
        }
        arrayCompuesto["usuario"] = datosUser[0];
        arrayCompuesto["visitas"] = arrayObservaciones;
        return { message: arrayCompuesto};
    }

    @UseGuards(AuthenticatedGuard)
    @Get('doctor/panel')
    @Render('doctores/panel')
    async getStatistics(@Request() req){
        var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
        var datosVisita = await this.visitaServicio.countAll();
        console.log(datosVisita);
        var array = [];
        array["user"] = datosUser;
        return { datos: datosUser};
    }
    // :::::::::::::::::::::::::::::::::
    //          AÑADIR DOCTOR
    // :::::::::::::::::::::::::::::::::
    @UseGuards(AuthenticatedGuard)
    @Get('funcionario/doctor')
    @Render('funcionarios/addDoctor')
    async addDoctor(@Request() req){
      var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
      return { user: datosUser[0] }
    }
    // :::::::::::::::::::::::::::::::::
    //     FUNCIONARIO: AÑADIR PACIENTES
    // :::::::::::::::::::::::::::::::::
    @UseGuards(AuthenticatedGuard)
    @Get('funcionario/paciente')
    @Render('funcionarios/addPacientes')
    async addPaciente(@Request() req){
      var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
      return { user: datosUser[0] }
    }
    

    // :::::::::::::::::::::::::::::::::
    //        FUNCIONARIO: VER PACIENTES
    // :::::::::::::::::::::::::::::::::
    @UseGuards(AuthenticatedGuard)
    @Get('funcionario/verpaciente')
    @Render('funcionarios/pacientes')
    async verPacientes(@Request() req){
      var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
      var pacienteArray = await this.pacienteServicio.findAllPacientes();
      var arrayPaciente = [];
      var arrayCompuesto = [];
      for(var i = 0; i < pacienteArray.length; i++){
        var arraySimple = [];
        var pacienteDatos = await this.datosServicio.findDatosById(pacienteArray[i].id_persona);
        var doctorDatos = await this.datosServicio.findDatosById(pacienteArray[i].id_doctor);
        var parientes = await this.parientesSevicio.findPariente(pacienteArray[i].id_persona);
        arraySimple["id_paciente"] = pacienteArray[i].id_persona;
        arraySimple["tipo_id"] = pacienteArray[i].tipo_id;
        arraySimple["nombre_paciente"] = pacienteDatos[0].pnombre_persona + " " + pacienteDatos[0].snombre_persona + " "  + pacienteDatos[0].papellido_persona + " " + pacienteDatos[0].sapellido_persona;
        arraySimple["nombre_doctor"] = doctorDatos[0].pnombre_persona + " " + doctorDatos[0].snombre_persona + " "  + doctorDatos[0].papellido_persona + " " + doctorDatos[0].sapellido_persona;
        arraySimple["telefonos_emergencias"] = pacienteArray[i].telefono_emergencias1 + ", " + pacienteArray[i].telefono_emergencias2;
        arraySimple["direccion_residencia"] = pacienteDatos[0].direccion_persona;
        arraySimple["n_parentesco"] = parientes[0].nombre_completo + " " + parientes[0].parentesco;
        arraySimple["fecha_registro"] = pacienteArray[i].fecha_registro_paciente;
        arraySimple["edad_paciente"] = pacienteArray[i].edad_paciente;
        arrayPaciente.push(arraySimple);
      }
      arrayCompuesto["usuario"] = datosUser[0];
      arrayCompuesto["paciente"] = arrayPaciente;
      return { datos: arrayCompuesto }
    }

    // :::::::::::::::::::::::::::::::::
    //     DOCTOR:  VER PACIENTES
    // :::::::::::::::::::::::::::::::::
    @UseGuards(AuthenticatedGuard)
    @Get('doctor/pacientevisitas')
    @Render('doctores/verPacientes')
    async verPacientesDoctor(@Request() req){
      var datosUser = await this.datosServicio.findDatosById(req.user.id_persona);
      var pacienteArray = await this.pacienteServicio.findPacienteByDoctor(req.user.id_persona);
      var medicamentos = await this.medicamentoServicio.findAllMedicamentos();
      var laboratorios = await this.LaboratorioServicio.findAllLabs();
      var arrayPaciente = [];
      var arrayCompuesto = [];
      console.log(pacienteArray);
      for(var i = 0; i < pacienteArray.length; i++){
        var arraySimple = [];
        var pacienteDatos = await this.datosServicio.findDatosById(pacienteArray[i].id_persona);
        var doctorDatos = await this.datosServicio.findDatosById(pacienteArray[i].id_doctor);
        var parientes = await this.parientesSevicio.findPariente(pacienteArray[i].id_persona);
        arraySimple["id_paciente"] = pacienteArray[i].id_persona;
        arraySimple["tipo_id"] = pacienteArray[i].tipo_id;
        arraySimple["nombre_paciente"] = pacienteDatos[0].pnombre_persona + " " + pacienteDatos[0].snombre_persona + " "  + pacienteDatos[0].papellido_persona + " " + pacienteDatos[0].sapellido_persona;
        arraySimple["nombre_doctor"] = doctorDatos[0].pnombre_persona + " " + doctorDatos[0].snombre_persona + " "  + doctorDatos[0].papellido_persona + " " + doctorDatos[0].sapellido_persona;
        arraySimple["telefonos_emergencias"] = pacienteArray[i].telefono_emergencias1 + ", " + pacienteArray[i].telefono_emergencias2;
        arraySimple["direccion_residencia"] = pacienteDatos[0].direccion_persona;
        arraySimple["n_parentesco"] = parientes[0].nombre_completo + " " + parientes[0].parentesco;
        arraySimple["fecha_registro"] = pacienteArray[i].fecha_registro_paciente;
        arrayPaciente.push(arraySimple);
      }
      arrayCompuesto["usuario"] = datosUser[0];
      arrayCompuesto["paciente"] = arrayPaciente;
      arrayCompuesto["laboratorios"] = laboratorios;
      arrayCompuesto["medicamentos"] = medicamentos;
      return { datos: arrayCompuesto }
    }

    // :::::::::::::::::::::::::::::::::
    //          GOOGLE MAPS
    // :::::::::::::::::::::::::::::::::
    @Get('map')
    @Render('mapa')
    async mapa(){
      var pacienteArray = await this.pacienteServicio.findAllPacientes();
      var coordenadasLatitud = [];
      var coordenadasLongitud = [];
      var coordenadasTotales = [];
      for(var i = 0; i < pacienteArray.length; i++){
        var latitud = pacienteArray[i].geo_paciente.split(",")[0];
        var longitud = pacienteArray[i].geo_paciente.split(",")[1];
        coordenadasLatitud.push(latitud);
        coordenadasLongitud.push(longitud)
      }
      coordenadasTotales["latitud"] = coordenadasLatitud;
      coordenadasTotales["longitud"] = coordenadasLongitud;
      console.log();
      return { coordenadas: coordenadasTotales }
    }

    // :::::::::::::::::::::::::::::::::
    //      ESTADISTICAS E INFORMES
    // :::::::::::::::::::::::::::::::::
    @Get('stats')
    @Render('estadisticas')
    async stats(){
      
      
    }

    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------
        // ---------------------------------
    //     SERVICE: CREAR DOCTOR
    // --------------------------------
    @UseGuards(AuthenticatedGuard)
    @Post('funcionario/createdoctor')
    @Redirect('doctor')
    async createDoctor(@Body()  parameters){
      var newDoctor = await this.doctorServicio.createNewDoctor(parameters);
      var newDatos = await this.datosServicio.createDatos(parameters);
    }
    // ---------------------------------
    //   SERVICE: CREAR PACIENTE
    // ---------------------------------
    @UseGuards(AuthenticatedGuard)
    @Post('funcionario/createpaciente')
    @Redirect('paciente')
    async createPaciente(@Body() parameters){
      var newPaciente = await this.pacienteServicio.createNewPaciente(parameters);
      var newDatos = await this.datosServicio.createDatos(parameters);
      var newParientes = await this.parientesSevicio.createNewPariente(parameters);
    }

    // ---------------------------------
    //   SERVICE: ELIMINAR PACIENTE
    // ---------------------------------
    @UseGuards(AuthenticatedGuard)
    @Post('doctor/removepaciente')
    async eliminarPaciente(@Body() parameters){
      var id_paciente = parameters.id_persona;
      await this.pacienteServicio.removePaciente(id_paciente);
      await this.datosServicio.removeDatos(id_paciente);
      await this.parientesSevicio.removeParientes(id_paciente);
      var visitas = await this.visitaServicio.findVisitaPaciente(id_paciente);
      for(var i = 0; i < visitas.length; i++){
        var idVisita = visitas[i].id_visita;
        await this.obsServicio.removeObservacion(idVisita);
        await this.recetaServicio.removeReceta(idVisita);
      }
      await this.visitaServicio.removeAllVisitas(id_paciente);
    }

    // ---------------------------------
    //   SERVICE: CREAR VISITA
    // ---------------------------------
    @UseGuards(AuthenticatedGuard)
    @Post('doctor/createvisita')
    @Redirect('pacientevisitas')
    async createVisit(@Body() parameters){
      console.log(parameters);
      var parametros = parameters;
      parametros.id_doctor = 1005890893;
      var visitaCreada = await this.visitaServicio.createNewVisita(parametros);
      console.log(visitaCreada);
      parametros.id_visita = visitaCreada.id_visita;
      var observacionCreada = await this.obsServicio.createNewObs(parametros);
      var recetaCreada = await this.recetaServicio.createNewReceta(parametros);
      console.log(observacionCreada);
      console.log(recetaCreada);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('redireccion')
    async redireccionar(@Request() req, @Res() res: Response){
      var doctorDatos = await this.doctorServicio.findDoctor(req.user.id_persona);
      var registranteDatos = await this.registranteServicio.findRegistrante(req.user.id_persona);
      if(doctorDatos.length != 0){
        res.redirect('doctor/visitas');
      } else {
        res.redirect('funcionario/verpaciente');
      }
    }

    @Post('stats/obtain')
    async obtenerStatistics(@Body() body){
      var fechas = [];
      var numbers = [];
      var arrayDatos = [];
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var yyyy = today.getFullYear();
      var days_total = new Date(body.month, body.year, 0).getDate()
      for(var i = 1; i <= days_total; i++){
        var fecha_completa = i + '/' + body.month + '/' + body.year;
        var visitaEncontrada = await this.visitaServicio.findVisitaFecha(fecha_completa);
        fechas.push(fecha_completa);
        numbers.push(visitaEncontrada.length);
      }
      return { fechas: fechas, numbers: numbers };
    }

    // ---------------------------------
    //   INGRESAR AL SISTEMA
    // ---------------------------------
    @UseGuards(LoginGuard)
    @Post('login')
    log(@Request() req, @Res() res: Response){
      console.log(req.user.id_persona);
      res.redirect('redireccion');
    }

}