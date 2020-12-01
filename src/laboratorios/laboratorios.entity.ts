import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('laboratorios')
// -------------------------------------------
export class LaboratoriosEntity{
    @PrimaryGeneratedColumn()
    id_laboratorio: number;

    @Column('varchar', {length: 250})
    nombre_laboratorio: string;
}