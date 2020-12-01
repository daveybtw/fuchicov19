import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { ObservacionesVisitaService } from './observaciones-visita.service';
import { ObservacionesVisitaEntity } from './observaciones-visita.entity';
import { observacionVisitaDto } from './dto/observaciones-visita.dto';
import { get } from 'http';

@Controller('observaciones')
export class ObservacionesVisitaController {
    constructor(
        public obsService: ObservacionesVisitaService
    ){}

    @Post('create')
    public async createNewOb(
        @Body() parameters): Promise<any>{
            return this.obsService.createNewObs(parameters);
    }

    @Post('find')
    public async findOb(
        @Body() parameters): Promise<any>{
            return this.obsService.findObservacion(parameters.id_visita);
        }
}
