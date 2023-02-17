import { Component } from '@angular/core';

interface MenuItem {
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItem: MenuItem[] = [
    {
      name: 'Collections',
    },
    {
      name: 'Men',
    },
    {
      name: 'Women',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ];
}
