import { Component, OnInit } from '@angular/core';
import { NavigationService, NavItem } from "../../../services/navigation.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItems: NavItem[] = [];
  currentlyExpandedItem: NavItem | null = null;
  isCollapsed: boolean = false;

  constructor(private navigationService: NavigationService, private router: Router) {}

  ngOnInit() {
    this.navigationService.getNavItems().subscribe(items => {
      this.navItems = items;
      this.router.events.subscribe(() => {
        this.updateActiveItem();
      });
      this.updateActiveItem();
    });
  }
  updateActiveItem() {
    const currentUrl = this.router.url;
  
    for (const item of this.navItems) {
      if (item.link && currentUrl.startsWith(item.link)) {
        item.active = true;
      } else {
        item.active = false;
      }
    }
  }
  toggleItem(item: NavItem) {
    if (item === this.currentlyExpandedItem) {
      item.expanded = false;
      this.currentlyExpandedItem = null;
    } else {
      if (this.currentlyExpandedItem) {
        this.currentlyExpandedItem.expanded = false;
      }
      item.expanded = true;
      this.currentlyExpandedItem = item;
    }
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}




