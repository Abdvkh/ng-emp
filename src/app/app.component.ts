import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  link: string;
  icon: string;
}

type Menu = MenuItem[]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: '/',
    },
    {
      title: 'Creage Employee',
      icon: 'note_add',
      link: '/employees/create',
    },
    {
      title: 'View Employees',
      icon: 'people',
      link: '/employees/',
    }
  ];
}
