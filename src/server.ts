import express from "express"
import cors from "cors"
import "reflect-metadata"

import { AppDataSource } from "./data-source"
import { StudentRoute } from "./routes"

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized successfully!")
    })
    .catch((err) => console.log(`Error during Data Source initialization : ${err}`))

const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/students", StudentRoute)

app.listen(process.env.PORT || 3333, () => {
    console.log('App is running')
})
