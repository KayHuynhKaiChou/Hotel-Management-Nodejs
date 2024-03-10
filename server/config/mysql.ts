import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: '127.0.0.1',
        port: 4000,
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false,
        query: {
            "raw": true
        },
        timezone: "+07:00"
    });

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.', process.env.DB_PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default connectDB;
