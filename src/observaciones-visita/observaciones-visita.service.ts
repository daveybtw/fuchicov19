import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObservacionesVisitaEntity } from './observaciones-visita.entity';
import { observacionVisitaDto } from './dto/observaciones-visita.dto';

@Injectable()
export class ObservacionesVisitaService {
    constructor(
        @InjectRepository(ObservacionesVisitaEntity)
        private obsRepository: Repository<ObservacionesVisitaEntity>
    ){}

    public async createNewObs(parametros){
        const newObservation = new ObservacionesVisitaEntity;
        newObservation.id = 0;
        newObservation.id_visita = parametros.id_visita;
        newObservation.observaciones_visita = parametros.observaciones_visita;
        return this.obsRepository.save(newObservation);
    }

    public async findObservacion(id: number): Promise<any>{
        return await this.obsRepository.find({
            where: [
                {id_visita: id}
            ]
        })
    }

    async removeObservacion(id){
        await this.obsRepository.delete({id_visita: id});
    }

    async findObservacionFecha(fecha){
        
    }
}
