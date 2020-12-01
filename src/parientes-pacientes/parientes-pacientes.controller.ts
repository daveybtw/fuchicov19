import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { ParientesPacientesService } from './parientes-pacientes.service';
import { ParientesPacientesEntity } from './parientes-pacientes.entity';
import { parientesDto } from './dto/parientes-pacientes.dto';
import { get } from 'http';

@Controller('parientes')
export class ParientesPacientesController {
    constructor(
        public parientesService: ParientesPacientesService,
    ){}

    @Post('create')
    public async createNewPariente(
        @Body() parameters): Promise<any>{
            var arrayParientes = parameters.pacientes;
            for(var i = 0; i < arrayParientes.length; i++){
                this.parientesService.createNewPariente(arrayParientes[i]);
            }
    }

    @Post('find')
    public async findPariente(
        @Body() parameters): Promise<any>{
            var PacienteHallado = await this.parientesService.findPariente(parameters.id_persona)
            return PacienteHallado;
    }
}