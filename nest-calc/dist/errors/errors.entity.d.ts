import { BaseEntity } from 'typeorm';
export declare class errors extends BaseEntity {
    id: number;
    timeTakenMs: number;
    created_at: Date;
}
