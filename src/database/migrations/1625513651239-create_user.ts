import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1625513651239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuario',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //se não pode ser negativa
                    isPrimary: true, // se é PK
                    isGenerated: true, // se será gerada automaticamente
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'username',
                    type: 'varchar'
                },
                {
                    name: 'senha',
                    type: 'varchar'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }
}
