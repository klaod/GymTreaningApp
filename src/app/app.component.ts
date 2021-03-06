import { Component } from '@angular/core';
import {DragAndDropService} from './drag-and-drop/drag-and-drop.service';

interface MenuLink {
  caption: string;
  path: string;
}

const links: MenuLink[] = [
  {
    caption: 'Головна',
    path: 'calendar'
  },
  {
    caption: 'Вправи',
    path: 'exercises'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: MenuLink[] = links;
  constructor(private dragAndDropService: DragAndDropService) {

  }

}
