import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraningComponent} from '../../traning/traning.component';
import {Training} from '../../shared/training.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() day: number;
  @Input() trainings: Training[];

  constructor(public createTraningDialog: MatDialog) {

  }

  ngOnInit() {
  }
  openCreateTraningDialog() {
    const traningDialogRef = this.createTraningDialog.open(TraningComponent, {
      data: this.day
    });
  }
}
