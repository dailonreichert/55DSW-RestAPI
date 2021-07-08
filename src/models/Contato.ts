import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Usuario from './Usuario';

@Entity('contato')
class Contato {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    fone: string;

    @Column()
    email: string;

    @Column()
    id_usuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario'})
    usuario: Usuario;
}

export default Contato;