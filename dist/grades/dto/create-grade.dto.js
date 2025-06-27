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
exports.UpdateGradeDto = exports.CreateGradeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateGradeDto {
    name;
    score;
    grade;
}
exports.CreateGradeDto = CreateGradeDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "name should not be empty" }),
    (0, class_validator_1.IsString)({ message: "name should not be characters" }),
    __metadata("design:type", String)
], CreateGradeDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({ message: "score should not be empty" }),
    (0, class_validator_1.IsInt)({ message: "score should be integer" }),
    (0, class_validator_1.Min)(0, { message: "score should atleat 0" }),
    (0, class_validator_1.Max)(100, { message: "score should lower than 100" }),
    __metadata("design:type", Number)
], CreateGradeDto.prototype, "score", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGradeDto.prototype, "grade", void 0);
class UpdateGradeDto extends (0, mapped_types_1.OmitType)(CreateGradeDto, ['name']) {
}
exports.UpdateGradeDto = UpdateGradeDto;
//# sourceMappingURL=create-grade.dto.js.map