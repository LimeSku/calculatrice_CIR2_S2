import { Controller,Post,Body } from '@nestjs/common';
import { ErrorsService } from './errors.service';
import { errors } from './errors.entity';

@Controller('errors')
export class ErrorsController {
    constructor(private errorsService: ErrorsService) {}
    
    @Post()
    createError(
     @Body('id') id: number,  
     @Body('created_at') created_at: Date,
     ): Promise<errors> {
     return this.errorsService.createError(id, created_at);
     }
}
