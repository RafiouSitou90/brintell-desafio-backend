"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const entity_1 = require("./entity");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.APP_TYPEORM_HOST,
    port: parseInt(process.env.APP_TYPEORM_PORT),
    username: process.env.APP_TYPEORM_USERNAME,
    password: process.env.APP_TYPEORM_PASSWORD,
    database: process.env.APP_TYPEORM_DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        entity_1.Student
    ],
    subscribers: [],
    migrations: [
        __dirname + "migrations/**/*.ts"
    ]
});
