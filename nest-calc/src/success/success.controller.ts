import { Controller, Post, Body } from '@nestjs/common';
import { success } from './success.entity';
import { SuccessService } from './success.service';

@Controller('success')
export class SuccessController {

    constructor(private successService: SuccessService) {}
    
    @Post()
    createSuccess(
     @Body('id') id: number,  
     @Body('timeTakenMs') timeTakenMs: number,
     @Body('created_at') created_at: Date,
     ): Promise<success> {
     return this.successService.createSuccess(id, timeTakenMs, created_at);
     }
    
}
