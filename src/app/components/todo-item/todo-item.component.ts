import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/TodoTypes';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {
  @Input()
  taskData!: ITask;

  faIcon = faTimes;

  @Output()
  deleteEmitter = new EventEmitter();

  onDelete() { 
    this.deleteEmitter.emit(this.taskData.id);
  }
}
