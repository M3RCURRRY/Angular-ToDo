import { Component, EventEmitter, Output } from '@angular/core';
import { ITask, Priority } from 'src/app/TodoTypes';

@Component({
  selector: 'app-todo-task-creator',
  templateUrl: './todo-task-creator.component.html',
  styleUrls: ['./todo-task-creator.component.scss']
})
export class TodoTaskCreatorComponent {
  text!: string;
  days!: number;
  priority!: Priority;

  options:string[] = Object.values(Priority);

  @Output() addTaskHandler = new EventEmitter();

  onTaskSubmit(text: string, days: number, priority: Priority) {

    if (text === undefined || days === undefined || priority === undefined) return;

    const obj: ITask = {
      text: this.text,
      daysLeft: this.days,
      priority: this.priority
    }

    this.addTaskHandler.emit(obj);
  }
}
