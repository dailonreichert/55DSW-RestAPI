import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('usuario')
class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    senha: string;
}

export default Usuario;