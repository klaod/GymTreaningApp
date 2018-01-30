import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumToArrayPipe } from './num-to-array.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NumToArrayPipe],
  exports: [NumToArrayPipe]
})
export class PipesModule { }
