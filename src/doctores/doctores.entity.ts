import { Entity, Column, PrimaryColumn} from 'typeorm';
// -------------------------------------------
@Entity('doctores')
// -------------------------------------------
export class DoctoresEntity{
    @PrimaryColumn()
    id_persona: number;

    @Column({type: 'bigint'})
    id_registrante: number;

    @Column('varchar', {length: 250})
    usuario_doctor: string;

    @Column('varchar', {length: 250})
    password_doctor: string;

    @Column('varchar', {length: 250})
    universidad_doctor: string;

    @Column('varchar', {length: 250})
    entidadp_doctor: string;

    @Column('varchar', {length: 250})
    fecha_registro: string;
}