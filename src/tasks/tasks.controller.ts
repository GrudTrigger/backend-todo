import {Body, Controller, Get, Param, ParseIntPipe, Post, Query} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {CreateTaskDto} from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get()
    async getAllTasks(){
        return this.tasksService.getAllTasks()
    }

    @Post()
    async createTask(@Body() dto: CreateTaskDto) {
        return this.tasksService.createTask(dto)
    }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.getTaskById(id)
    }
}
