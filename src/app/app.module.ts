import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoTaskCreatorComponent } from './components/todo-task-creator/todo-task-creator.component';
import { FilterPipe } from './filter.pipe';
import { TodoTaskFilterComponent } from './components/todo-task-filter/todo-task-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoTaskCreatorComponent,
    FilterPipe,
    TodoTaskFilterComponent,
    TodoPageComponent,
    AboutPageComponent,
    AuthPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
