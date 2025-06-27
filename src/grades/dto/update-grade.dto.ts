import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateGradeDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    @IsInt()
    @Min(0)
    @Max(100)
    score?: number;

    @IsOptional()
    @IsString()
    grade?: string;

}
