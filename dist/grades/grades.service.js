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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grade_entity_1 = require("./entities/grade.entity");
const common_2 = require("@nestjs/common");
let GradesService = class GradesService {
    gradeRepository;
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
    }
    async create(createGradeDto) {
        try {
            const extistName = await this.gradeRepository.findOneBy({ name: createGradeDto.name });
            if (extistName) {
                console.log("this name is already used kub");
                throw new common_2.BadRequestException(`${createGradeDto.name} is already taken.`);
            }
            const dataUser = this.gradeRepository.create(createGradeDto);
            const createResult = await this.gradeRepository.save(dataUser);
            return createResult;
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                if (error.code === '23505') {
                    throw new common_2.BadRequestException('ชื่อซ้ำในระบบ');
                }
            }
            throw error;
        }
    }
    async findAll() {
        const testResults = await this.gradeRepository.find();
        return testResults;
    }
    async findOne(id) {
        const dataUserID = await this.gradeRepository.findOneBy({ id });
        return dataUserID;
    }
    async findByName(name) {
        const findUserName = await this.gradeRepository.find({ where: { name } });
        return findUserName;
    }
    async update(id, updateUserDto) {
        try {
            if (updateUserDto.name) {
                const existing = await this.gradeRepository.findOne({ where: { name: updateUserDto.name } });
                if (existing && existing.id !== id) {
                    console.log('🔧 Updating grade ID:', id, 'to name:', updateUserDto.name);
                    throw new common_2.BadRequestException(`${updateUserDto.name} is already taken.`);
                }
            }
            await this.gradeRepository.update(id, updateUserDto);
            return this.gradeRepository.findOneBy({ id });
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError && error.code === '23505') {
                throw new common_2.BadRequestException('ชื่อที่ต้องการอัปเดตซ้ำกับข้อมูลอื่นในระบบ');
            }
            throw error;
        }
    }
    remove(id) {
        return this.gradeRepository.delete(id);
    }
};
exports.GradesService = GradesService;
exports.GradesService = GradesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grade_entity_1.GradeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradesService);
//# sourceMappingURL=grades.service.js.map