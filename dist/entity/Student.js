"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../enums");
let Student = class Student {
    constructor() {
        this.id = 0;
        this.name = "";
        this.cpf = "";
        this.email = "";
        this.gender = enums_1.Gender.UNKNOWN;
        this.phoneNumber = "";
        this.createdAt = 0;
        this.updatedAt = 0;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("identity", { name: "id", type: "bigint", generatedIdentity: "ALWAYS" }),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200, nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enums_1.Gender, default: enums_1.Gender.UNKNOWN, nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { unique: true, nullable: false, length: 150 }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { unique: true, nullable: false, length: 14 }),
    __metadata("design:type", String)
], Student.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "phone_number", length: 16, nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "created_at", nullable: false }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updated_at", nullable: true, default: null }),
    (0, typeorm_1.UpdateDateColumn)({ default: null }),
    __metadata("design:type", Number)
], Student.prototype, "updatedAt", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)({ name: "tab_students" }),
    __metadata("design:paramtypes", [])
], Student);
exports.Student = Student;
