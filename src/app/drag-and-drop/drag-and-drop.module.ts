import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragulaModule} from 'ng2-dragula';
import {DragAndDropService} from './drag-and-drop.service';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule
  ],
  declarations: [],
  providers: [DragAndDropService]
})
export class DragAndDropModule { }
