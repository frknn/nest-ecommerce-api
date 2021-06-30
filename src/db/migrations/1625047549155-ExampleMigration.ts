import {MigrationInterface, QueryRunner} from "typeorm";

export class ExampleMigration1625047549155 implements MigrationInterface {
    name = 'ExampleMigration1625047549155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }

}
