import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PacientesContagiadosEntity } from 'src/pacientes-contagiados/pacientes-contagiados.entity';
import { Repository } from 'typeorm';
import { DatosPersonalesEntity } from './datos-personales.entity';
import { PacientesContagiadosService } from '../pacientes-contagiados/pacientes-contagiados.service';
import { datosDto } from './dto/datos-personales.dto';

@Injectable()
export class DatosPersonalesService {
    constructor(
        private readonly pacientesServicio: PacientesContagiadosService,

        @InjectRepository(DatosPersonalesEntity)
        private datosRepository: Repository<DatosPersonalesEntity>,
    ){}

    public async createDatos(datosObject: datosDto): Promise<any>{
        const newDatos = new DatosPersonalesEntity();
        newDatos.id = 0;
        newDatos.id_persona = datosObject.id_persona;
        newDatos.pnombre_persona = datosObject.pnombre_persona;
        newDatos.snombre_persona = datosObject.snombre_persona;
        newDatos.papellido_persona = datosObject.papellido_persona;
        newDatos.sapellido_persona = datosObject.sapellido_persona;
        newDatos.direccion_persona = datosObject.direccion_persona;
        newDatos.barrio_persona = datosObject.barrio_persona;
        console.log(this.datosRepository.save(newDatos));
    }

    public async findDatosById(documento: number): Promise<any>{
        return await this.datosRepository.find({
            where: [
                {id_persona: documento}
            ]
        })
    }

    async removeDatos(id){
        await this.datosRepository.delete({id_persona: id});
    }

    async countBarrios(){
        const pacientes = await this.pacientesServicio.subQueryNeeds();
        const posts = await this.datosRepository.createQueryBuilder()
            .select("COUNT(barrio_persona)")
            .addSelect("barrio_persona", "barrio")
            .where("id_persona IN (" + pacientes + ")")
            .groupBy("barrio_persona")
            .orderBy("barrio", "ASC")
            .getRawMany();

        return posts;
    }

}
