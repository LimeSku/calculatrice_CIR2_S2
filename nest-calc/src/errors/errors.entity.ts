import {BaseEntity, Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

@Entity('errors')
export class errors extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timeTakenMs: number;

  @CreateDateColumn()
  created_at: Date;
}
