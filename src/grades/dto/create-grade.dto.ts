import { OmitType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsNotEmpty , IsNumber, IsString, Min, Max, IsInt, IsOptional } from "class-validator";

export class CreateGradeDto {
    @IsNotEmpty({message: "name should not be empty"})
    @IsString({message: "name should not be characters"})
    name: string;
    
    @Type(() => Number)
    @IsNotEmpty({message: "score should not be empty"})
    @IsInt({message: "score should be integer"})
    @Min(0, {message: "score should atleat 0"})
    @Max(100, {message: "score should lower than 100"})
    score: number;

    @IsOptional()
    @IsString()
    grade?: string;

}
export class UpdateGradeDto extends OmitType( CreateGradeDto, ['name'] as const)  {} 
