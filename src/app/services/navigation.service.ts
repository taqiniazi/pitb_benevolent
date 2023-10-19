import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navItems = new BehaviorSubject<NavItem[]>([]);

  constructor() {
    const initialNavItems: NavItem[] = [
      {
        label: 'Dashboard',
        link: '/dashboard',
        iconClass: 'bi bi-house-check',
        active: false,
      },
      {
        label: 'Employee Profile',
        iconClass: 'bi bi-person',
        children: [
          { label: 'Employee Profile 1', iconClass: '',  link: '/emprofile/1' },
          { label: 'Employee Profile 2', iconClass: '',  link: '/emprofile/2' },
        ],
        active: false,
      },
      {
        label: 'Dependents',
        iconClass: 'bi bi-people',
        active: false,
        children: [
          { label: 'Dependents 1', iconClass: '', active: false, link: '/dependents/1' },
          { label: 'Dependents 2', iconClass: '', active: false, link: '/dependents/2' },
        ]
      },
      {
        label: 'Logout',
        link: '/login',
        iconClass: 'bi bi-box-arrow-in-left'
      }
    ];

    this.navItems.next(initialNavItems);
  }

  getNavItems(): Observable<NavItem[]> {
    return this.navItems.asObservable();
  }
}
export interface NavItem {
  expanded?: boolean;
  iconClass: string;
  label: string;
  link?: string;
  active?: boolean,
  children?: NavItem[];
}