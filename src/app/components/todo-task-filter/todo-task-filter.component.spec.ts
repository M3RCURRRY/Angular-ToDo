import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskFilterComponent } from './todo-task-filter.component';

describe('TodoTaskFilterComponent', () => {
  let component: TodoTaskFilterComponent;
  let fixture: ComponentFixture<TodoTaskFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTaskFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
