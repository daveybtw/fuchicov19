import { Inject, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { VisitasMedicasEntity } from './visitas-medicas.entity';
import { visitasDto } from './dto/visitas-medicas.dto';

@Injectable()
export class VisitasMedicasService {
    constructor(
        @InjectRepository(VisitasMedicasEntity)
        private visitasRepository: Repository<VisitasMedicasEntity>
    ){}

    public async createNewVisita(parametros){
        const newVisita = new VisitasMedicasEntity;
        newVisita.id_visita = 0;
        newVisita.temperatura_paciente = parametros.temperatura_paciente;
        newVisita.presion_paciente = parametros.presion_paciente;
        newVisita.id_doctor = parametros.id_doctor;
        newVisita.id_paciente = parametros.id_paciente;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = String(today.getFullYear());
        newVisita.dia_visita = dd;
        newVisita.mes_visita = mm;
        newVisita.year_visita = yyyy;

        return this.visitasRepository.save(newVisita);
    }

    public async findVisitaPaciente(id: number): Promise<any>{
        return await this.visitasRepository.find({
            where: [
                {id_paciente: id}
            ]
        })
    }

    public async findVisitaDoctor(id: number): Promise<any>{
        return await this.visitasRepository.find({
            where: [
                {id_doctor: id}
            ]
        })
    }

    public async findDiaVisita(dia, mes, año): Promise<any>{
        return await this.visitasRepository.find({
            where: [
                {dia_visita: dia, mes_visita: mes, year_visita: año}
            ]
        })
    }

    public async findMesVisita(mes, año): Promise<any>{
        return await this.visitasRepository.find({
            where: [
                {mes_visita: mes, year_visita: año}
            ]
        })
    }

    public async findAñoVisita(año): Promise<any>{
        return await this.visitasRepository.find({
            where: [
                {year_visita: año}
            ]
        })
    }

    public async findAllVisits(){
        return await this.visitasRepository.find();
    }

    public async removeAllVisitas(id){
        var parientes = await this.visitasRepository.find({
            where: [
                {id_paciente: id}
            ]
        })
        await this.visitasRepository.remove(parientes);
    }

    public async countAll(){
        return await this.visitasRepository.findAndCount();
    }
}
