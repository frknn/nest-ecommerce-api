import {MigrationInterface, QueryRunner} from "typeorm";

export class OnUpdateCascadeRemoved1625306609224 implements MigrationInterface {
    name = 'OnUpdateCascadeRemoved1625306609224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8"`);
        await queryRunner.query(`ALTER TABLE "option" ALTER COLUMN "variantId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8"`);
        await queryRunner.query(`ALTER TABLE "option" ALTER COLUMN "variantId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
