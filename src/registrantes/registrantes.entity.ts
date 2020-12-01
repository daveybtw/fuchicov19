import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('registrantes')
// -------------------------------------------
export class RegistrantesEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint'})
    id_persona: number;

    @Column('varchar', {length: 250})
    usuario_registrante: string;
    
    @Column('varchar', {length: 250})
    password_registrante: string;

}