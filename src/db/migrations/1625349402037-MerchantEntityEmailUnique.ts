import {MigrationInterface, QueryRunner} from "typeorm";

export class MerchantEntityEmailUnique1625349402037 implements MigrationInterface {
    name = 'MerchantEntityEmailUnique1625349402037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" ADD CONSTRAINT "UQ_546608b3c7bf7c175d3780c38f8" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" DROP CONSTRAINT "UQ_546608b3c7bf7c175d3780c38f8"`);
    }

}
