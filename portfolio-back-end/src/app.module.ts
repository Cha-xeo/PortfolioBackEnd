import { HelloModule } from './module/hello/hello.module';
import { HelloService } from './module/hello/hello.service';
import { HelloController } from './module/hello/hello.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HelloModule,],
  controllers: [
    HelloController],
  providers: [
    HelloService],
})
export class AppModule { }
