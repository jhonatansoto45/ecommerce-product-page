import { Component, HostListener } from '@angular/core';

interface MenuItem {
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  visibleCart: boolean = false;
  menuLateral: boolean = false;

  readonly maxViewportWidth: number = 610;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth > this.maxViewportWidth) this.menuLateral = false;
  }

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

  openCart(): void {
    this.visibleCart = !this.visibleCart;
  }

  openMenu(): void {
    this.menuLateral = true;
  }

  closeMenu(): void {
    this.menuLateral = false;
  }
}
