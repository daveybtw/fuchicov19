import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('reserva')
// -------------------------------------------
export class ReservaEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint'})
    id_laboratorio: number;

    @Column({type: 'bigint'})
    id_medicamento: number;
    
    @Column({type: 'bigint'})
    cantidad_reserva: number;

}