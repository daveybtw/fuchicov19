import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecetaMedicaEntity } from './receta-medica.entity'
import { recetaDto } from './dto/receta-medica.dto';

@Injectable()
export class RecetaMedicaService {
    constructor(
        @InjectRepository(RecetaMedicaEntity)
        private recetaRepository: Repository<RecetaMedicaEntity>
    ){}

    public async createNewReceta(parametros){ 
        const newReceta = new RecetaMedicaEntity;
        newReceta.id = 0;
        newReceta.id_visita = parametros.id_visita;
        newReceta.id_medicamento = parametros.id_medicamento;
        newReceta.id_laboratorio = parametros.id_laboratorio;
        newReceta.dosis_recetada = parametros.dosis_recetada;
        return this.recetaRepository.save(newReceta);
    }

    public async findReceta(id: number): Promise<any>{
        return await this.recetaRepository.find({
            where: [
                {id_visita: id}
            ]
        })
    }

    async removeReceta(id){
        await this.recetaRepository.delete({id_visita: id});
    }
}
