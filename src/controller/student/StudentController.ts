import { Request, Response } from "express";

import { StudentService } from "../../services";

export class StudentController {
    async create(request: Request, response: Response) {
        const service = new StudentService();
        const { name, gender, phoneNumber, email, cpf } = request.body
        const result = await service.create({name, gender, phoneNumber, email, cpf})

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(201).json(result)
    }

    async index(_: Request, response: Response) {
        const service = new StudentService();
        const students = await service.getAllStudents()

        return response.status(200).json(students)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const service = new StudentService();
        const result = await service.delete(parseInt(id))

        if ( result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json("Student deleted successfully.")
    }

    async statistics(_: Request, response: Response) {
        const service = new StudentService();
        const studentStatistics = await service.statistics()

        return response.status(200).json(studentStatistics)
    }
}
