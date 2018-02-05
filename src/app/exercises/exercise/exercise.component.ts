import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Exercise } from '../../shared/exercise';

import { Unit } from '../../shared/unit.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  name: string = "";
  unit: Unit = null;
  hasRepeating: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ExerciseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise
  ) { }

  ngOnInit() {
    this.name = this.data.name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
