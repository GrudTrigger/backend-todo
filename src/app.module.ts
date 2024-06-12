import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import {Tasks} from "./tasks/tasks.model";

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: "postgres",
        host: "localhost",
        port: 5438,
        username: "postgres",
        password: "12345",
        database: "todo",
        models: [Tasks],
        autoLoadModels: true,
        synchronize: true
      }),
      TasksModule
  ],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
