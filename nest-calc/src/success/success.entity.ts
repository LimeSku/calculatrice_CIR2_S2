import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, BaseEntity } from 'typeorm';

@Entity('success')
export class success extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timeTakenMs: number;

  @CreateDateColumn()
  created_at: Date;
}
