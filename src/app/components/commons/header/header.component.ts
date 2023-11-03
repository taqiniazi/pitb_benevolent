import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSubMenuCollapsed: boolean = false;

  toggleSubMenu() {
    this.isSubMenuCollapsed = !this.isSubMenuCollapsed;
  }
}
