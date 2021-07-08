import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContato1625514609421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'contato',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //se não pode ser negativo
                    isPrimary: true, // se é PK
                    isGenerated: true, // se será gerada automaticamente
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'fone',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'id_usuario',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ContatoUsuario',
                    columnNames: ['id_usuario'],
                    referencedTableName: 'usuario',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'

                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contato');
    }

}
