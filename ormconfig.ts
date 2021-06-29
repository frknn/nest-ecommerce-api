import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'postgres',
  entities: ['dist/src/**/entities/*.entity.js'],
  cli: {
    migrationsDir: 'src/db/migrations'
  },
  migrations: ['dist/src/db/migrations/*.js'],
  synchronize: false
}

export default config;