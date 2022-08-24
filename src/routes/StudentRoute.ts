import { Router } from "express"

import { StudentController } from "../controller"

const studentRoutes = Router()
const { index, create, delete: deleteStudent, statistics } = new StudentController()

studentRoutes.get("/", index)
studentRoutes.post("/", create)
studentRoutes.delete("/:id", deleteStudent)
studentRoutes.get("/statistics", statistics)

export default studentRoutes
