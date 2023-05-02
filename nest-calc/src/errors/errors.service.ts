import { Injectable } from '@nestjs/common';
import { errors } from './errors.entity';

@Injectable()
export class ErrorsService {

    async createError(id:number,created_at:Date): Promise<errors> {
        const err = new errors();
        err.id = id;
        err.created_at = created_at;
        await err.save();
        return err;
    }
}
