import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import { ITask } from 'src/app/TodoTypes';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
