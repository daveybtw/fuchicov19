import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { DoctoresService } from './doctores.service';
import { DatosPersonalesService } from '../datos-personales/datos-personales.service';
import { DoctoresEntity } from './doctores.entity';
import { doctoresDto } from './dto/doctores.dto';
import { DatosPersonalesEntity } from '../datos-personales/datos-personales.entity';
import { get } from 'http';

@Controller('doctores')
export class DoctoresController {
    constructor(
        public doctoresService: DoctoresService,
    ){}

    @Post('create')
    public async createNewDoctor(
        @Body() parameters): Promise<any>{
            console.log(parameters.id_doctor);
            this.doctoresService.createNewDoctor(parameters);
            //this.datosService.createDatos(parameters);
    }

    @Post('findby:id_doctor')
    public async findDoctor(
        @Body() parameters): Promise<any>{
            var DoctorHallado = await this.doctoresService.findDoctor(parameters.id_doctor);
            return DoctorHallado;
    }

    @Post('crearDoc')
    @Render('adduser')
    public async renderDoctor(){
        return 0;
    }
}
