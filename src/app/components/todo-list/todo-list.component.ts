import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import { ITask } from 'src/app/todo-types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  tasks: ITask[] = [];
}
