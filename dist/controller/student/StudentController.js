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
exports.StudentController = void 0;
const services_1 = require("../../services");
class StudentController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new services_1.StudentService();
            const { name, gender, phoneNumber, email, cpf } = request.body;
            const result = yield service.create({ name, gender, phoneNumber, email, cpf });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.status(201).json(result);
        });
    }
    index(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new services_1.StudentService();
            const students = yield service.getAllStudents();
            return response.status(200).json(students);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const service = new services_1.StudentService();
            const result = yield service.delete(parseInt(id));
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.status(200).json("Student deleted successfully.");
        });
    }
    statistics(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new services_1.StudentService();
            const studentStatistics = yield service.statistics();
            return response.status(200).json(studentStatistics);
        });
    }
}
exports.StudentController = StudentController;
