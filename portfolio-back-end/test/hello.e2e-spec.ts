import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { HelloModule } from '../src/module/hello/hello.module';

describe('HelloController (e2e)', () => {
  let app: INestApplication;

  beforeEach( async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HelloModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });
  
  it('/api/hello (GET)', () => {
    console.log(app.getHttpServer().address())
    return request(app.getHttpServer())
      .get(`/api/hello`)
      .expect(HttpStatus.OK)
      .expect('Hello World!');
  });
  it('/hello (GET)', () => {
    return request(app.getHttpServer())
      .get(`/hello`)
      .expect(HttpStatus.OK)
      .expect('Hello World!');
  });
});
