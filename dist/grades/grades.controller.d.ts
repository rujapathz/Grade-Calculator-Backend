import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
export declare class GradesController {
    private readonly gradesService;
    constructor(gradesService: GradesService);
    create(createGradeDto: CreateGradeDto): Promise<import("./entities/grade.entity").GradeEntity>;
    findAll(name?: string): Promise<import("./entities/grade.entity").GradeEntity[]>;
    findOne(id: number): Promise<import("./entities/grade.entity").GradeEntity | null>;
    update(id: number, UpdateGradeDto: UpdateGradeDto): Promise<import("./entities/grade.entity").GradeEntity | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
