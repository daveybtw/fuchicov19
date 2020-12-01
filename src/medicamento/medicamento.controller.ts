import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoEntity } from './medicamento.entity';
import { medicamentoDto } from './dto/medicamento.dto';
import { get } from 'http';

@Controller('medicamento')
export class MedicamentoController {
    constructor(
        public medService: MedicamentoService){}

    @Post('create')
    public async createNewMed(
        @Body() parameters): Promise<any>{
            return this.medService.createNewMedicamento(parameters);
    }

    @Get('find')
    public async findMed(
        @Body() parameters): Promise<any>{
            return this.medService.findMedicamento(parameters.id_medicamento);
        }
}
