export declare class CreateGradeDto {
    name: string;
    score: number;
    grade?: string;
}
declare const UpdateGradeDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateGradeDto, "name">>;
export declare class UpdateGradeDto extends UpdateGradeDto_base {
}
export {};
