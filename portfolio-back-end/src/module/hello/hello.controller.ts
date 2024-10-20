/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('api')
export class HelloController {
    constructor(private readonly helloService: HelloService) {}

  @Get('hello')
  getHello(): string {
    return this.helloService.getHello();
  }
  
  @Get()
  getApp(): string {
    return '1';
  }
}
