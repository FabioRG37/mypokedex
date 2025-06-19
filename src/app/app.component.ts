import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'início', url: '/home', icon: 'home' },
    { title: 'Favoritos', url: '/favorites', icon: 'heart' }
  ];

  constructor() {}
}
