import { Component } from '@angular/core';

interface MenuLink {
  caption: string;
  path: string;
}

const links: MenuLink[] = [
  {
    caption: "Календарь",
    path: "calendar"
  },
  {
    caption: "Упражнения",
    path: "exercises"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: MenuLink[] = links;
}
