import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('datos-personales')
// -------------------------------------------
export class DatosPersonalesEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'bigint'})
    id_persona: number;

    @Column('varchar', {length: 250})
    pnombre_persona: string;

    @Column('varchar', {length: 250})
    snombre_persona: string;

    @Column('varchar', {length: 250})
    papellido_persona: string;

    @Column('varchar', {length: 250})
    sapellido_persona: string;

    @Column('varchar', {length: 250})
    direccion_persona: string;

    @Column('varchar', {length: 250})
    barrio_persona: string;
} 