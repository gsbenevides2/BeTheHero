require('dotenv').config()

// Update with your config settings.
const env = process.env

module.exports = {
	development: {
		client: 'pg',
		connection: {
			user: env.db_user,
			database: env.db_database,
			password: env.db_password,
			host: env.db_host
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './src/database/migrations',
			tableName: 'knex_migrations'
		},
		useNullAsDefault: true,
	},

	test: {
		client: 'pg',
		connection: {
			user: env.db_user,
			database: env.db_database,
			password: env.db_password,
			host: env.db_host
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './src/database/migrations',
			tableName: 'knex_migrations'
		},
		useNullAsDefault: true,
	},

	staging: {
		client: 'pg',
		connection: {
			user: env.db_user,
			database: env.db_database,
			password: env.db_password,
			host: env.db_host
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './src/database/migrations',
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'pg',
		connection: {
			user: env.db_user,
			database: env.db_database,
			password: env.db_password,
			host: env.db_host
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './src/database/migrations',
			tableName: 'knex_migrations'
		}
	}

};
