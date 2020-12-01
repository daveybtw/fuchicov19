import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { RegistrantesService } from './registrantes.service';
import { RegistrantesEntity } from './registrantes.entity';
import { registrantesDto } from './dto/registrantes.dto';
import { get } from 'http';
import { DatosPersonalesService } from 'src/datos-personales/datos-personales.service';

@Controller('registrantes')
export class RegistrantesController {
    constructor(
        public registranteServicio: RegistrantesService,
    ){}

    @Post('create')
    public async createReg(parametros){
        return this.registranteServicio.createNewRegistrante(parametros);
    }

    @Post('find')
    public async findReg(parametros){
        return this.registranteServicio.findRegistrante(parametros.id_registrante);
    }
}
