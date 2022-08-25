"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const entity_1 = require("../entity");
const data_source_1 = require("../data-source");
const enums_1 = require("../enums");
class StudentService {
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = data_source_1.AppDataSource.getRepository(entity_1.Student);
            return yield repository.find();
        });
    }
    create({ name, gender, phoneNumber, email, cpf }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = data_source_1.AppDataSource.getRepository(entity_1.Student);
            const emailLower = email.toLowerCase();
            const cpfFormatted = cpf.replace(".", "")
                .replace(".", "")
                .replace("-", "");
            console.log({ cpfFormatted, cpf });
            if (yield repository.findOneBy({ email: emailLower })) {
                return new Error("Student already with this email.");
            }
            if (yield repository.findOneBy({ phoneNumber })) {
                return new Error("Student already with this phone number.");
            }
            if ((yield repository.findOneBy({ cpf: cpfFormatted })) || (yield repository.findOneBy({ cpf }))) {
                return new Error("Student already with this cpf.");
            }
            const student = repository.create({
                name, email, gender, phoneNumber, cpf
            });
            yield repository.save(student);
            return student;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = data_source_1.AppDataSource.getRepository(entity_1.Student);
            if (!(yield repository.findOneBy({ id }))) {
                return new Error("Student Not Found!");
            }
            yield repository.delete(id);
        });
    }
    statistics() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = data_source_1.AppDataSource.getRepository(entity_1.Student);
            const totalMale = yield repository.count({
                where: { gender: enums_1.Gender.MALE }, cache: { id: "total_male", milliseconds: 3600000 }
            });
            const totalOther = yield repository.count({
                where: { gender: enums_1.Gender.OTHER }, cache: { id: "total_other", milliseconds: 3600000 }
            });
            const totalFemale = yield repository.count({
                where: { gender: enums_1.Gender.FEMALE }, cache: { id: "total_female", milliseconds: 3600000 }
            });
            const totalUnknown = yield repository.count({
                where: { gender: enums_1.Gender.UNKNOWN }, cache: { id: "total_students", milliseconds: 3600000 }
            });
            const totalStudent = yield repository.count({
                cache: { id: "total_students", milliseconds: 3600000 }
            });
            return {
                totalMale,
                totalOther,
                totalFemale,
                totalUnknown,
                totalStudent
            };
        });
    }
}
exports.StudentService = StudentService;
