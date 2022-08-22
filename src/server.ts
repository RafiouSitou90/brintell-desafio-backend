import express from "express"
import cors from "cors"

const APP_PORT = 3333

const app = express()

app.use(cors())
app.use(express.json())

app.listen(APP_PORT, () => {
    console.log(`App starting and listening on http://localhost:${APP_PORT}`)
})
