import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StepIndicator } from 'src/app/models/genres';
import { getCurrentStep } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {
  currentStep$!: Observable<number>
  constructor(private store: Store<sharedAppState>) { 
    this.currentStep$ = this.store.select(getCurrentStep)
  }
  handleStepProgress(step: number | null) {
    if(step && step > 1) return true
    return false
  }
  ngOnInit(): void {
  }

}
