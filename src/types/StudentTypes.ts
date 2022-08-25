import { Gender } from "../enums";

export type StudentCreation = {
    name: string
    gender: Gender
    email: string
    cpf: string
    phoneNumber: string
}

export type StudentsStatistic = {
    totalMale: number
    totalOther: number
    totalFemale: number
    totalUnknown: number
    totalStudent: number
}
