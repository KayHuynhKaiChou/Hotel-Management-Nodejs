import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT as unknown as number,
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false,
        query: {
            "raw": true
        },
        timezone: "+07:00"
    });

export default sequelize;
