import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratoriosEntity } from './laboratorios.entity';
import { laboratoriosDto } from './dto/laboratorios.dto';

@Injectable()
export class LaboratoriosService {
    constructor(
        @InjectRepository(LaboratoriosEntity)
        private laboratoriosRepository: Repository<LaboratoriosEntity>
    ){}

    public async createNewLab(parametros){
        const newLab = new LaboratoriosEntity;
        newLab.id_laboratorio = parametros.id_laboratorio;
        newLab.nombre_laboratorio = parametros.nombre_laboratorio;
        return this.laboratoriosRepository.save(newLab);
    }

    public async findLab(id: number): Promise<any>{
        return await this.laboratoriosRepository.find({
            where: [
                {id_laboratorio: id}
            ]
        })
    }

    public async findAllLabs(){
        return await this.laboratoriosRepository.find()
    }
}
