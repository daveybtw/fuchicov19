import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { LaboratoriosService } from './laboratorios.service';
import { LaboratoriosEntity } from './laboratorios.entity';
import { laboratoriosDto } from './dto/laboratorios.dto';
import { get } from 'http';

@Controller('laboratorios')
export class LaboratoriosController {
    constructor(
        public laboratoriosService: LaboratoriosService
    ){}

    @Post('create')
    public async createNewLab(
        @Body() parameters): Promise<any>{
            console.log(parameters.id_laboratorio);
            return this.laboratoriosService.createNewLab(parameters);
    }

    @Get('find')
    public async findLab(
        @Body() parameters): Promise<any>{
            return this.laboratoriosService.findLab(parameters.id_laboratorio);
    }
}
