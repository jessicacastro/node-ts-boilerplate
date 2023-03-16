import { knex as setupKnex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/database.sqlite',
  },
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
