import { Component } from "@angular/core";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Benovolent Fund';
  showHeaderAndSidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set the visibility of the header and sidebar
        this.showHeaderAndSidebar = !event.url.includes('login');
      }
    });
  }
  ngOnInit(): void {}
}
