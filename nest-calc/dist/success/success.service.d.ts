import { success } from './success.entity';
export declare class SuccessService {
    createSuccess(id: number, timeTakenMs: number, created_at: Date): Promise<success>;
}
