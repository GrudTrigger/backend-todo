import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Tasks} from "./tasks.model";
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    constructor(@InjectModel(Tasks) private tasksModel: typeof Tasks) {}

    async getAllTasks() {
        return await this.tasksModel.findAll()
    }

    async createTask(dto: CreateTaskDto) {
        if(!dto.title || !dto.status){
            throw new BadRequestException('Название или статус не могут быть пустыми')
        }
        const newTask = {
            title: dto.title,
            status: dto.status
        }
        return await this.tasksModel.create(newTask)
    }

    async getTaskById(id: number) {
        const data =  await this.tasksModel.findAll({
            where: {
                id
            }
        })
        return data[0]
    }
}
