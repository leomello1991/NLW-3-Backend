import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603253861212 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name:'images',
      columns:[
        {
          
          name:'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name:'orphanage_id',
          type:'integer',
        }
      ],
      foreignKeys:[
        {
          name:'imageOrphanges',
          columnNames:['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate:'CASCADE',
          onDelete:'SET NULL'
        },
      ]
    }))
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
  
}
