import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { PacientesContagiadosService } from './pacientes-contagiados.service';
import { PacientesContagiadosEntity } from './pacientes-contagiados.entity';
import { pacientesDto } from './dto/pacientes-contagiados.dto';
import { get } from 'http';
import { DatosPersonalesEntity } from '../datos-personales/datos-personales.entity';
import { DatosPersonalesService } from '../datos-personales/datos-personales.service';

@Controller('pacientes')
export class PacientesContagiadosController {
    constructor(
        public pacientesService: PacientesContagiadosService,
    ){}

    @Post('create')
    public async createNewPaciente(
        @Body() parameters): Promise<any>{
            this.pacientesService.createNewPaciente(parameters)
    }

    @Post('find')
    public async findDoctor(
        @Body() parameters): Promise<any>{
            var PacienteHallado = await this.pacientesService.findPaciente(parameters.id_paciente);
            return PacienteHallado;
    }
}
