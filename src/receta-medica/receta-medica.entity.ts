import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('receta-medica')
// -------------------------------------------
export class RecetaMedicaEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint'})
    id_visita: number;

    @Column({type: 'bigint'})
    id_medicamento: number;

    @Column({type: 'bigint'})
    id_laboratorio: number;
    
    @Column('varchar', {length: 250})
    dosis_recetada: string;

}