import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { VisitasMedicasService } from './visitas-medicas.service';
import { VisitasMedicasEntity } from './visitas-medicas.entity';
import { visitasDto } from './dto/visitas-medicas.dto';
import { get } from 'http';
import { ObservacionesVisitaService } from 'src/observaciones-visita/observaciones-visita.service';
import { RecetaMedicaService } from 'src/receta-medica/receta-medica.service';
import { DatosPersonalesService } from 'src/datos-personales/datos-personales.service';

@Controller('visita')
export class VisitasMedicasController {
    constructor(
        public visitaServicio: VisitasMedicasService,
        
    ){}

    @Post('create')
    public async createVisita(parametros){
        return this.visitaServicio.createNewVisita(parametros);
    }

    @Post('findPac')
    public async findVisitaPac(parametros){
        return this.visitaServicio.findVisitaPaciente(parametros.id_paciente);
    }
    
    @Post('findDoc')
    public async findVisitaDoc(parametros){
        return this.visitaServicio.findVisitaDoctor(parametros.id_doctor);
    }

    @Get('findall')
    public async findAllVisitas(){
        return this.visitaServicio.findAllVisits();
    }

    

    
}
