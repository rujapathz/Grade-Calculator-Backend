import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('grades')
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
