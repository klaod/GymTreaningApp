import {Component, OnInit, Input} from '@angular/core';
import {MatDialog, MatCard} from '@angular/material';
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

  constructor(public createTrainingDialog: MatDialog) {

  }

  ngOnInit() {
  }

  openCreateTrainingDialog() {
    this.createTrainingDialog.open(TraningComponent, {
      data: this.day
    });
  }
}
