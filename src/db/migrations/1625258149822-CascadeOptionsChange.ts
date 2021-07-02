import {MigrationInterface, QueryRunner} from "typeorm";

export class CascadeOptionsChange1625258149822 implements MigrationInterface {
    name = 'CascadeOptionsChange1625258149822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8"`);
        await queryRunner.query(`ALTER TABLE "option" ALTER COLUMN "variantId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variant" DROP CONSTRAINT "FK_cb0df5c8d79ac0ea08a87119673"`);
        await queryRunner.query(`ALTER TABLE "variant" ALTER COLUMN "productId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "variant" ADD CONSTRAINT "FK_cb0df5c8d79ac0ea08a87119673" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "variant" DROP CONSTRAINT "FK_cb0df5c8d79ac0ea08a87119673"`);
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8"`);
        await queryRunner.query(`ALTER TABLE "variant" ALTER COLUMN "productId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variant" ADD CONSTRAINT "FK_cb0df5c8d79ac0ea08a87119673" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "option" ALTER COLUMN "variantId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
