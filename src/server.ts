import express from "express"
import cors from "cors"
import "reflect-metadata"

import { AppDataSource } from "./data-source"
import { StudentRoute } from "./routes"

const APP_PORT = 3333

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized successfully!")
    })
    .catch((err) => console.log(`Error during Data Source initialization : ${err}`))

const app = express()

app.use(cors())
app.use(express.json())

app.use("/students", StudentRoute)

app.listen(APP_PORT, () => {
    console.log(`App starting and listening on http://localhost:${APP_PORT}`)
})
