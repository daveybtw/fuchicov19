import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('pacientes')
// -------------------------------------------
export class PacientesContagiadosEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint'})
    id_persona: number;

    @Column('varchar', {length: 250})
    tipo_id: string;

    @Column({type: 'bigint'})
    id_doctor: number;

    @Column('varchar', {length: 250})
    ciudad_contagio: string;

    @Column({type: 'bigint'})
    telefono_emergencias1: number;

    @Column({type: 'bigint'})
    telefono_emergencias2: number;

    @Column('varchar', {length: 250})
    fecha_registro_paciente: string;

    @Column('varchar', {length: 250})
    geo_paciente: string;

    @Column()
    edad_paciente: number;
}