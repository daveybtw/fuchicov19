import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { RecetaMedicaService } from './receta-medica.service';
import { RecetaMedicaEntity } from './receta-medica.entity';
import { recetaDto } from './dto/receta-medica.dto';
import { get } from 'http';

@Controller('receta')
export class RecetaMedicaController {
    constructor(
        public recetaServicio : RecetaMedicaService,
    ){}

    @Post('create')
    public async createNewReceta(
        @Body() parameters): Promise<any>{
            this.recetaServicio.createNewReceta(parameters);
    }

    @Post('find')
    public async findReceta(
        @Body() parameters): Promise<any>{
            var RecetaHallada = await this.recetaServicio.findReceta(parameters.id_visita);
            return RecetaHallada;
    }
}
