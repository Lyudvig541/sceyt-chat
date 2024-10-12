import { Sequelize } from 'sequelize';

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/chat') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });
//
// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize('chat', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});
