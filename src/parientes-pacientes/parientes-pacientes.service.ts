import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParientesPacientesEntity } from './parientes-pacientes.entity';
import { parientesDto } from './dto/parientes-pacientes.dto';

@Injectable()
export class ParientesPacientesService {
    constructor(
        @InjectRepository(ParientesPacientesEntity)
        private parientesRepository: Repository<ParientesPacientesEntity>,
    ){}

    public async createNewPariente(parametros){
        const newPariente = new ParientesPacientesEntity;
        newPariente.id = 0;
        newPariente.id_persona = parametros.id_persona;
        newPariente.nombre_completo = parametros.pariente;
        newPariente.parentesco = parametros.parentesco;
        var parienteCreado = this.parientesRepository.save(newPariente);
        return parienteCreado;
    }

    public async findPariente(documento: number): Promise<any>{
        return await this.parientesRepository.find({
            where: [
                {id_persona: documento}
            ]
        })
    }

    public async removeParientes(id){
        var parientes = await this.parientesRepository.find({
            where: [
                {id_persona: id}
            ]
        })
        await this.parientesRepository.remove(parientes);
    }
}

