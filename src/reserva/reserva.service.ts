import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaEntity } from './reserva.entity';

@Injectable()
export class ReservaService {
    constructor(
        @InjectRepository(ReservaEntity)
        private reservaRepository: Repository<ReservaEntity>
    ){}

    public async createNewReserva(parametros){
        const newReserva = new ReservaEntity;
        newReserva.id = 0;
        newReserva.id_medicamento = parametros.id_medicamento;
        newReserva.id_laboratorio = parametros.id_laboratorio;
        newReserva.cantidad_reserva = parametros.cantidad_reserva;
        this.reservaRepository.save(newReserva);
    }

    public async findReservas(lab, med): Promise<any>{
        return await this.reservaRepository.find({
            where: [
                {id_laboratorio: lab, id_medicamento: med}
            ]
        });
    }

    public async restarReservas(medicamento, laboratorio, cantidad){
        return await this.reservaRepository.decrement({id_laboratorio: laboratorio, id_medicamento: medicamento}, "cantidad_reserva", cantidad);
    }
}
