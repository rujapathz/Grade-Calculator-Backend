import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('grades')
@Unique(['name'])
export class GradeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'integer', nullable: true })
  score: number;

  @Column({ type: 'text', nullable: true })
  grade: string;
}
