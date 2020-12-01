import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('parientes-pacientes')
// -------------------------------------------
export class ParientesPacientesEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint'})
    id_persona: number;

    @Column('varchar', {length: 250})
    nombre_completo: string;

    @Column('varchar', {length: 250})
    parentesco: string;
}