import express, { Express } from 'express';  // Correctly imports Express
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

const server: Express = express();

async function createNestServer(expressInstance: Express) {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
  app.setGlobalPrefix('api');  // Optional: add '/api' prefix to all routes
  await app.init();
}

createNestServer(server);

export default server;
