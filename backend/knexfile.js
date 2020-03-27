require('dotenv').config()

// Update with your config settings.
const env = process.env
module.exports = {

 development: {
	client: 'mysql',
	connection: {
	 user: env.db_user,
	 database: env.db_database,
	 password: env.db_password,
	 host: env.db_host
	},
	migrations: {
	 directory: './src/database/migrations'
	},
	useNullAsDefault: true,
 },

 test: {
	client: 'mysql',
	connection: {
	 user: env.db_user,
	 database: env.db_database,
	 password: env.db_password,
	 host: env.db_host
	},
	migrations: {
	 directory: './src/database/migrations'
	},
	useNullAsDefault: true,
 },

 staging: {
	client: 'postgresql',
	connection: {
	 database: 'my_db',
	 user:     'username',
	 password: 'password'
	},
	pool: {
	 min: 2,
	 max: 10
	},
	migrations: {
	 tableName: 'knex_migrations'
	}
 },

 production: {
	client: 'postgresql',
	connection: {
	 database: 'my_db',
	 user:     'username',
	 password: 'password'
	},
	pool: {
	 min: 2,
	 max: 10
	},
	migrations: {
	 tableName: 'knex_migrations'
	}
 }

};
