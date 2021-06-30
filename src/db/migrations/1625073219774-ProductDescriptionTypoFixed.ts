import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductDescriptionTypoFixed1625073219774 implements MigrationInterface {
    name = 'ProductDescriptionTypoFixed1625073219774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "descripton" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "description" TO "descripton"`);
    }

}
