import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: "/",
      rootPath: join(__dirname, '..', 'client'),
    }),
    ServeStaticModule.forRoot({
      serveRoot: "/review",
      rootPath: join(__dirname, '..', 'review'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
