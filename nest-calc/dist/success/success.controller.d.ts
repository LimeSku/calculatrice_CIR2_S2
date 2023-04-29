import { success } from './success.entity';
import { SuccessService } from './success.service';
export declare class SuccessController {
    private successService;
    constructor(successService: SuccessService);
    createSuccess(id: number, timeTakenMs: number, created_at: Date): Promise<success>;
}
