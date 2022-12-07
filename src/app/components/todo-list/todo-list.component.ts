import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import { ITask, Priority } from 'src/app/TodoTypes';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: ITask[] = [];
  filter!: string;

  constructor(private taskService: TaskService, private http: HttpClient) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data as ITask[];
    });
  }

  addTask(obj: ITask) {
    const newTask: ITask = {
      id: this.tasks.at(-1)?.id as number + 1,
      priority: obj.priority,
      text: obj.text,
      daysLeft: obj.daysLeft
    }

    this.taskService.addTask(newTask);
  }

  setFilter(value: string) {
    this.filter = value;
  }

  deleteTask(id: number) {
    this.tasks = this.taskService.removeTask(id);
  }
}
