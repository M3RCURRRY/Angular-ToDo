import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TASKS } from '../mock-data';
import { ITask, Priority } from '../TodoTypes';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ITask[] = [];

  constructor(private http: HttpClient) {  }
  
  getTasks(): Observable<Object> {
    return this.http.get('assets/todo-list.json');
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
