import {MigrationInterface, QueryRunner} from "typeorm";

export class AssetProductIdSelectFalse1625146597198 implements MigrationInterface {
    name = 'AssetProductIdSelectFalse1625146597198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_e10f15c52c46d84d33c25b84fdc"`);
        await queryRunner.query(`ALTER TABLE "asset" ALTER COLUMN "productId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_e10f15c52c46d84d33c25b84fdc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset" DROP CONSTRAINT "FK_e10f15c52c46d84d33c25b84fdc"`);
        await queryRunner.query(`ALTER TABLE "asset" ALTER COLUMN "productId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "asset" ADD CONSTRAINT "FK_e10f15c52c46d84d33c25b84fdc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
