import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { errors } from 'src/errors/errors.entity';
import { success } from 'src/success/success.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {

type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'root',
database: 'calcweb',
entities: [errors,success],
};