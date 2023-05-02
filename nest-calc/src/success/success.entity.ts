import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, BaseEntity } from 'typeorm';

@Entity('success')
export class success extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timeTakenMs: number;

  @Column({type:'date'})
  created_at: Date;
}
