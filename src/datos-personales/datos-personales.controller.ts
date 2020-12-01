import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { DatosPersonalesService } from './datos-personales.service';
import { DatosPersonalesEntity } from './datos-personales.entity';
import { datosDto } from './dto/datos-personales.dto';
import { get } from 'http';

@Controller('datos')
export class DatosPersonalesController {
    constructor(
        public datosService: DatosPersonalesService
    ){}

    @Post('create')
    public async createDatos(
        @Body() parameters: datosDto): Promise<any>{
            console.log(parameters.id_persona);
            const returnedData = this.datosService.createDatos(parameters);
            return returnedData;
    }
    
    @Get('find:id_persona')
    public async findDatos(
        @Param() parameters): Promise<any>{
            console.log(parameters);
            return this.datosService.findDatosById(parameters.id_persona);
    }
}
