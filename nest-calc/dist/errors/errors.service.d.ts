import { errors } from './errors.entity';
export declare class ErrorsService {
    createError(id: number, created_at: Date): Promise<errors>;
}
