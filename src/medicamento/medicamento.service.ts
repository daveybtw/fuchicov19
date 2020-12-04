import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicamentoEntity } from './medicamento.entity';
import { medicamentoDto } from './dto/medicamento.dto';

@Injectable()
export class MedicamentoService {
    constructor(
        @InjectRepository(MedicamentoEntity)
        private medicamentoRepository: Repository<MedicamentoEntity>
    ){}

    public async createNewMedicamento(parametros){
        const newMedicamento = new MedicamentoEntity;
        newMedicamento.id_medicamento = parametros.id_medicamento;
        newMedicamento.nombre_medicamento = parametros.nombre_medicamento;
        return this.medicamentoRepository.save(newMedicamento);
    }

    public async findMedicamento(id: number): Promise<any>{
        return await this.medicamentoRepository.find({
            where: [
                {id_medicamento: id}
            ]
        })
    }

    public async findAllMedicamentos(){
        return await this.medicamentoRepository.find()
    }
}
