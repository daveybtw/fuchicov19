import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrantesEntity } from './registrantes.entity';
import { registrantesDto } from './dto/registrantes.dto';

@Injectable()
export class RegistrantesService {
    constructor(
        @InjectRepository(RegistrantesEntity)
        private registrantesRepository: Repository<RegistrantesEntity>
    ){}

    public async createNewRegistrante(parametros){
        const newRegistrante = new RegistrantesEntity;
        newRegistrante.id = 0;
        newRegistrante.id_persona = parametros.id_persona;
        newRegistrante.usuario_registrante = parametros.usuario_registrante;
        newRegistrante.password_registrante = parametros.password_registrante;
        this.registrantesRepository.save(newRegistrante);
    }

    public async findRegistrante(id: number): Promise<any>{
        return await this.registrantesRepository.find({
            where: [
                {id_persona: id}
            ]
        })
    }

    public async findUsernameAndPassword(username, pass): Promise<any>{
        return await this.registrantesRepository.find({
            where: { usuario_registrante: username, 
                password_registrante: pass}
        });
    }
}
