import {MigrationInterface, QueryRunner} from "typeorm";

export class CascadeOptionsChangeAgain1625259331744 implements MigrationInterface {
    name = 'CascadeOptionsChangeAgain1625259331744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8"`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option" DROP CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8"`);
        await queryRunner.query(`ALTER TABLE "option" ADD CONSTRAINT "FK_0e14bf33d4209484ba9db1ad0f8" FOREIGN KEY ("variantId") REFERENCES "variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
