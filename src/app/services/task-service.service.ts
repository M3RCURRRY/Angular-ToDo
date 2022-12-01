import { Injectable } from '@angular/core';

import { TASKS } from '../mock-data';
import { ITask, Priority } from '../TodoTypes';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  tasks: ITask[] = TASKS;
  
  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return this.tasks;
  }

  changeStatus(id: number, priority: Priority) {
    for(let task of this.tasks) {
      if (task.id === id) {
        task.priority = priority;
        break;
      }
    }
  }
}
