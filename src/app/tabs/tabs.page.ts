import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../services/exercises/exercises.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private _exercises: ExercisesService) {}

  ngOnInit(): void {
    this._exercises.loadExercises();
  }
}
