import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  showHeaderAndSidebar: boolean = true;
  isMainWrapperVisible: boolean = false;
  isSidebarCollapsed: boolean = false;
  isSidebarCollapsedActive: boolean = false;

  toggleMainWrapperAndSidebar() {
    this.isMainWrapperVisible = !this.isMainWrapperVisible;
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.isSidebarCollapsedActive = !this.isSidebarCollapsedActive;
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderAndSidebar = !event.url.includes('login');
      }
    });
  }
  ngOnInit(): void {}
}
