import {MigrationInterface, QueryRunner} from "typeorm";

export class DeletedCategoryColumnOnProductMigration1624997656571 implements MigrationInterface {
    name = 'DeletedCategoryColumnOnProductMigration1624997656571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category" character varying NOT NULL`);
    }

}
