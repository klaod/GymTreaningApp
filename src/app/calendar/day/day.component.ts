import {Component, OnInit, Input, HostListener} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TraningComponent} from '../../traning/traning.component';
import {Training} from '../../shared/training.model';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  animations: [
    trigger('footerState', [
      state('visible', style({
        'bottom': 0
      })),
      state('hidden', style({
        'bottom': '-25px'
      })),
      transition('visible => hidden', animate('500ms ease-out')),
      transition('hidden => visible', animate('500ms ease-out'))
    ])
  ]
})
export class DayComponent implements OnInit {
  @Input() day: number;
  @Input() trainings: Training[];
  footerState = 'hidden';

  constructor(public createTrainingDialog: MatDialog) {

  }
  @HostListener('mouseenter')
  mouseEnter() {
    this.footerState = 'visible';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.footerState = 'hidden';
  }

  ngOnInit() {
  }

  openCreateTrainingDialog() {
    this.createTrainingDialog.open(TraningComponent, {
      data: {
        day: this.day
      }
    });
  }
}
