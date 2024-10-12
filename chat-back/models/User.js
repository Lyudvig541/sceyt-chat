import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
    'User',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
    },
);

async function syncDatabase() {
    await sequelize.sync();
    console.log('Database synchronized.');
}
// Example usage
// recommended to be in controller file
// async function run() {
//
//     await syncDatabase();// remember to comment this after server runs ones.
//     // Create a new user
//     const newUser = await User.create({
//         username: 'john_doe',
//         firstName: 'asd',
//         lastName: 'asd',
//     });
//     console.log('New user created:', newUser.toJSON());
// }
// run();
export default User