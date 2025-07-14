import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GradeEntity } from './entities/grade.entity';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class GradesService {
<<<<<<< HEAD

  constructor(@InjectRepository(GradeEntity) private readonly gradeRepository: Repository<GradeEntity>)
  {}
=======
  constructor(
    @InjectRepository(GradeEntity)
    private readonly gradeRepository: Repository<GradeEntity>,
  ) {}

>>>>>>> 1be6211 (added eslint config)
  async create(createGradeDto: CreateGradeDto): Promise<GradeEntity> {
    // eslint-disable-next-line no-useless-catch
    try {
<<<<<<< HEAD
      const extistName = await this.gradeRepository.findOneBy({ name: createGradeDto.name});
      if (extistName) {
        throw new BadRequestException(`${createGradeDto.name} is already taken.`);
      }
      const dataUser = this.gradeRepository.create(createGradeDto)
      const createResult = await this.gradeRepository.save(dataUser)
=======
      const dataUser = this.gradeRepository.create(createGradeDto);
      const createResult = await this.gradeRepository.save(dataUser);
>>>>>>> 1be6211 (added eslint config)
      return createResult;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<GradeEntity[]> {
    const testResults = await this.gradeRepository.find();
    return testResults;
  }

  async findOne(id: number): Promise<GradeEntity | null> {
    const dataUserID = await this.gradeRepository.findOneBy({ id });
    return dataUserID;
  }

  async findByName(name: string): Promise<GradeEntity[]> {
    const findUserName = await this.gradeRepository.find({ where: { name } });
    return findUserName;
  }

<<<<<<< HEAD
  async update(id: number, updateUserDto: UpdateGradeDto): Promise<GradeEntity | null> { 
    try {
     if (updateUserDto.name) {
      const existing = await this.gradeRepository.findOne({ where: { name: updateUserDto.name } });
      if (existing && existing.id !== id) {
        throw new BadRequestException(`${updateUserDto.name} is already taken.`);
      }
    }
    await this.gradeRepository.update(id, updateUserDto);
    return this.gradeRepository.findOneBy({ id });
  } catch (error) {
    throw error;
      }
    }
=======
  async update(
    id: number,
    updateUserDto: UpdateGradeDto,
  ): Promise<GradeEntity | null> {
    await this.gradeRepository.update(id, updateUserDto);
    const dataUserUpdate = await this.gradeRepository.findOneBy({ id });
    return dataUserUpdate;
  }

>>>>>>> 1be6211 (added eslint config)
  remove(id: number) {
    return this.gradeRepository.delete(id);
  }
}
