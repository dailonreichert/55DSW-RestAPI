import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCompromisso1625514983713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'compromisso',
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
                    name: 'descricao',
                    type: 'varchar',
                },
                {
                    name: 'local',
                    type: 'varchar'
                },
                {
                    name: 'data',
                    type: 'text',
                },
                {
                    name: 'id_usuario',
                    type: 'integer'
                },
                {
                    name: 'id_contato',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'CompromissoUsuario',
                    columnNames: ['id_usuario'],
                    referencedTableName: 'usuario',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'

                },
                {
                    name: 'CompromissoContato',
                    columnNames: ['id_contato'],
                    referencedTableName: 'contato',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'

                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compromisso');
    }

}
