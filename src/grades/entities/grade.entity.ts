<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
=======
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
>>>>>>> 1be6211 (added eslint config)

@Entity('grades')
@Unique(['name'])
export class GradeEntity {
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
    @Column({ type: 'text', unique: true })
    name: string;
=======
  @Column({ type: 'text', nullable: true })
  name: string;
>>>>>>> 1be6211 (added eslint config)

  @Column({ type: 'integer', nullable: true })
  score: number;

  @Column({ type: 'text', nullable: true })
  grade: string;
}
