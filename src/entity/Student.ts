import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"
import {Gender} from "../enums";

@Entity({ name: "tab_students" })
export class Student {

    @PrimaryGeneratedColumn("identity", { name: "id", type: "bigint", generatedIdentity: "ALWAYS" })
    id: number | undefined

    @Column("varchar", { length: 200, nullable: false })
    name: string

    @Column({ type: "enum", enum: Gender, default: Gender.UNKNOWN, nullable: false })
    gender: Gender

    @Column("varchar", { unique: true, nullable: false, length: 150 })
    email: string

    @Column("varchar", { unique: true, nullable: false, length: 14 })
    cpf: string

    @Column("varchar", { name: "phone_number", length: 16, nullable: false })
    phoneNumber: string

    @Column("datetime", { name: "created_at", nullable: false })
    @CreateDateColumn()
    createdAt: number | undefined

    @Column("datetime", { name: "updated_at", nullable: true, default: null })
    @UpdateDateColumn({ default: null })
    updatedAt: number | undefined

    constructor() {
        this.name = ""
        this.cpf = ""
        this.email = ""
        this.gender = Gender.UNKNOWN
        this.phoneNumber = ""
    }
}
