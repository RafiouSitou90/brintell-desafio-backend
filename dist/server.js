"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const data_source_1 = require("./data-source");
const routes_1 = require("./routes");
const APP_PORT = 3333;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized successfully!");
})
    .catch((err) => console.log(`Error during Data Source initialization : ${err}`));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*", methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }));
app.use(express_1.default.json());
app.use("/students", routes_1.StudentRoute);
app.listen(APP_PORT, () => {
    console.log(`App starting and listening on http://localhost:${APP_PORT}`);
});
