import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskCreatorComponent } from './todo-task-creator.component';

describe('TodoTaskCreatorComponent', () => {
  let component: TodoTaskCreatorComponent;
  let fixture: ComponentFixture<TodoTaskCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTaskCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
