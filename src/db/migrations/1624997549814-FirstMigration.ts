import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1624997549814 implements MigrationInterface {
    name = 'FirstMigration1624997549814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "descripton" character varying NOT NULL, "price" integer NOT NULL, "smallImage" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, "category" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
