import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DayComponent} from '../calendar/day/day.component';

@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.scss']
})
export class TraningComponent implements OnInit {
  day: number;

  constructor(
      public traningDialogRef: MatDialogRef<DayComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    debugger;
    this.day = this.data.day;
  }

}
