import { ErrorsService } from './errors.service';
import { errors } from './errors.entity';
export declare class ErrorsController {
    private errorsService;
    constructor(errorsService: ErrorsService);
    createError(id: number, created_at: Date): Promise<errors>;
}
