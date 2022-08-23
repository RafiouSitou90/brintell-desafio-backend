import dotenv from "dotenv"
import { DataSource } from "typeorm";
import {Student} from "./entity";

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.APP_TYPEORM_HOST,
    port: process.env.APP_TYPEORM_PORT,
    username: process.env.APP_TYPEORM_USERNAME,
    password: process.env.APP_TYPEORM_PASSWORD,
    database: process.env.APP_TYPEORM_DATABASE,

    synchronize: true,
    logging: true,
    entities: [
        Student
    ],
    subscribers: [],
    migrations: [
        __dirname + "migrations/**/*.ts"
    ]
})
