import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Contato from './Contato';
import Usuario from './Usuario';

@Entity('compromisso')
class Compromisso {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

    @Column()
    local: string;

    @Column('date')
    data: string;

    @Column()
    id_usuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario'})
    usuario: Usuario;

    @Column()
    id_contato: number;

    @ManyToOne(() => Contato)
    @JoinColumn({ name: 'id_contato'})
    contato: Contato;
}

export default Compromisso;