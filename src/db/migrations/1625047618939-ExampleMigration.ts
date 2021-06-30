import {MigrationInterface, QueryRunner} from "typeorm";

export class ExampleMigration1625047618939 implements MigrationInterface {
    name = 'ExampleMigration1625047618939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }

}
