import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task-filter',
  templateUrl: './todo-task-filter.component.html',
  styleUrls: ['./todo-task-filter.component.scss']
})
export class TodoTaskFilterComponent {
  @Input()
  filter!: string;

  @Output() filterEmitter = new EventEmitter();

  filterHandler() {
    this.filterEmitter.emit(this.filter);
  }
}