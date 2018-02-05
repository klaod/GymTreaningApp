import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraningComponent } from './traning.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  declarations: [TraningComponent]
})
export class TraningModule { }
