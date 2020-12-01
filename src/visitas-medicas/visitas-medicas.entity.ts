import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('visita-medica')
// -------------------------------------------
export class VisitasMedicasEntity{
    @PrimaryGeneratedColumn()
    id_visita: number;

    @Column('varchar', {length: 250})
    temperatura_paciente: string;
    
    @Column('varchar', {length: 250})
    presion_paciente: string;

    @Column({type: 'bigint'})
    id_paciente: number;

    @Column({type: 'bigint'})
    id_doctor: number;

    @Column('varchar', {length: 250})
    fecha_visita: string;
}