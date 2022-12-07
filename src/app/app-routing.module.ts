import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AboutPageComponent},
  { path: 'todo', component: TodoPageComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
