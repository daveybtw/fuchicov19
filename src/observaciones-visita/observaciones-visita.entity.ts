import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('observaciones')
// -------------------------------------------
export class ObservacionesVisitaEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'bigint'})
    id_visita: number;

    @Column('varchar', {length: 6000})
    observaciones_visita: string;

}