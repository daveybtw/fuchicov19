import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctoresEntity } from './doctores.entity';
import { doctoresDto } from './dto/doctores.dto';

@Injectable()
export class DoctoresService {
    constructor(
        @InjectRepository(DoctoresEntity)
        private doctoresRepository: Repository<DoctoresEntity>,
    ){}

    public async createNewDoctor(parametros){
        const newDoctor = new DoctoresEntity();
        newDoctor.id_persona = parametros.id_persona;
        newDoctor.id_registrante = parametros.id_registrante;
        newDoctor.usuario_doctor = parametros.usuario_doctor;
        newDoctor.password_doctor = parametros.password_doctor;
        newDoctor.universidad_doctor = parametros.universidad_doctor;
        newDoctor.entidadp_doctor = parametros.entidadp_doctor;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        newDoctor.fecha_registro = dd + '/' + mm + '/' + yyyy;

        var doctorCreado = this.doctoresRepository.save(newDoctor);
    }

    public async findDoctor(documento: number): Promise<any>{
        return await this.doctoresRepository.find({
            where: [
                {id_persona: documento}
            ]
        })
    }

    async removeDoctor(id){
        await this.doctoresRepository.delete({id_persona: id});
    }

    public async findUsernameAndPassword(username, pass): Promise<any>{
        return await this.doctoresRepository.find({
            where: { usuario_doctor: username, 
                password_doctor: pass}
        });
    }
}
