import {StudentCreation, StudentsStatistic} from "../types";
import { Student} from "../entity";
import { AppDataSource } from "../data-source";
import {Gender} from "../enums";

export class StudentService {

    async getAllStudents() {
        const repository = AppDataSource.getRepository(Student)

        return await repository.find()
    }

    async create({ name, gender, phoneNumber, email }: StudentCreation): Promise<Student | Error> {
        const repository = AppDataSource.getRepository(Student)

        const emailLower: string = email.toLowerCase()

        if (await repository.findOneBy({email: emailLower})) {
            return new Error("Student already with this email.")
        }

        if (await repository.findOneBy({phoneNumber})) {
            return new Error("Student already with this phone number.")
        }

        const student = repository.create({
            name, email, gender, phoneNumber
        })

        await repository.save<Student>(student)

        return student
    }

    async delete(id: number): Promise<void | Error> {
        const repository = AppDataSource.getRepository(Student)

        if (!await repository.findOneBy({ id })) {
            return new Error("Student Not Found!")
        }

        await repository.delete(id)
    }

    async statistics(): Promise<StudentsStatistic> {
        const repository = AppDataSource.getRepository(Student)

        const totalMale = await repository.count({
            where: { gender: Gender.MALE }, cache: { id: "total_male", milliseconds: 3600000 }
        })
        const totalOther = await repository.count({
            where: { gender: Gender.OTHER }, cache: { id: "total_other", milliseconds: 3600000 }
        })
        const totalFemale = await repository.count({
            where: { gender: Gender.FEMALE }, cache: { id: "total_female", milliseconds: 3600000 }
        })
        const totalUnknown = await repository.count({
            where: { gender: Gender.UNKNOWN }, cache: { id: "total_students", milliseconds: 3600000 }
        })
        const totalStudent = await repository.count({
            cache: { id: "total_students", milliseconds: 3600000 }
        })

        return {
            totalMale,
            totalOther,
            totalFemale,
            totalUnknown,
            totalStudent
        }
    }
}
