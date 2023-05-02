import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  
}
