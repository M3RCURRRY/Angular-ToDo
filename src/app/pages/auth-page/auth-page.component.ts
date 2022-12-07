import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  onLogin(username: string, password: string) {
    this.authService.login(username, password).subscribe();
  }
}
