import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src','database', 'database.sqlite'),
        connectTimeout: 90000
    },
    migrations: {
        directory: path.resolve(__dirname, 'src','database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src','database', 'seeds'),
    },
    debug: true,
    pool: {
      min: 1,
      max: 20,
    },
    useNullAsDefault: true
}