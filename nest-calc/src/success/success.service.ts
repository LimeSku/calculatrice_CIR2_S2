import { Injectable } from '@nestjs/common';

import { success } from './success.entity';

@Injectable()
export class SuccessService {
    
    async createSuccess(id:number,timeTakenMs:number,created_at:Date): Promise<success> {
        const succ = new success();
        succ.id = id;
        succ.timeTakenMs = timeTakenMs;
        succ.created_at = created_at;
        await succ.save();
        return succ;
    }
       
}
