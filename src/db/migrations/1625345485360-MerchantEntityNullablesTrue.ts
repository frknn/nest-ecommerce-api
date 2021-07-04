import {MigrationInterface, QueryRunner} from "typeorm";

export class MerchantEntityNullablesTrue1625345485360 implements MigrationInterface {
    name = 'MerchantEntityNullablesTrue1625345485360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" DROP COLUMN "contactEmail"`);
        await queryRunner.query(`ALTER TABLE "merchant" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "name" SET DEFAULT 'My Store'`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "contactPhone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "adress" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "adress" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "contactPhone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchant" ALTER COLUMN "name" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "merchant" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "merchant" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "merchant" ADD "contactEmail" character varying NOT NULL`);
    }

}
