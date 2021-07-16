import {MigrationInterface, QueryRunner} from "typeorm";

export class CustomerNullableFields1625411664512 implements MigrationInterface {
    name = 'CustomerNullableFields1625411664512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_23778827c741b8937b565a59293"`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "merchantId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_23778827c741b8937b565a59293" FOREIGN KEY ("merchantId") REFERENCES "merchant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_23778827c741b8937b565a59293"`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "merchantId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_23778827c741b8937b565a59293" FOREIGN KEY ("merchantId") REFERENCES "merchant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
