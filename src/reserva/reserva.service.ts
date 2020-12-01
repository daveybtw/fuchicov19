import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaEntity } from './reserva.entity';

@Injectable()
export class ReservaService {
    constructor(
        @InjectRepository(ReservaEntity)
        private registrantesRepository: Repository<ReservaEntity>
    ){}

    public async createNewReserva(parametros){
        const newReserva = new ReservaEntity;
        newReserva.id = 0;
        newReserva.id_medicamento = parametros.id_medicamento;
        newReserva.id_laboratorio = parametros.id_laboratorio;
        newReserva.cantidad_reserva = parametros.cantidad_reserva;
        this.registrantesRepository.save(newReserva);
    }

    public async findReservas(id: number): Promise<any>{
        return await this.registrantesRepository.find()
    }
}
