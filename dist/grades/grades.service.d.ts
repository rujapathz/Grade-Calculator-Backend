import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Repository } from 'typeorm';
import { GradeEntity } from './entities/grade.entity';
export declare class GradesService {
    private readonly gradeRepository;
    constructor(gradeRepository: Repository<GradeEntity>);
    create(createGradeDto: CreateGradeDto): Promise<GradeEntity>;
    findAll(): Promise<GradeEntity[]>;
    findOne(id: number): Promise<GradeEntity | null>;
    findByName(name: string): Promise<GradeEntity[]>;
    update(id: number, updateUserDto: UpdateGradeDto): Promise<GradeEntity | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
