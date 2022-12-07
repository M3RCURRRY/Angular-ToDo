import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  moveTo(path: string) {
    console.log(`Moving to ${path}`)
    this.router.navigate([path]);
  }
}
