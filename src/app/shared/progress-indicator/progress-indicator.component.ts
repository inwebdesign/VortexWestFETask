import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FinalStepIndicator, NewSubgenre, StepIndicator } from 'src/app/models/genres';
import { getCurrentStep, isFinalStep, isNewSubgenreAdded } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {
  currentStep$!: Observable<number>
  newSubgenre$!: Observable<NewSubgenre>
  finalStep$!: Observable<boolean>
  constructor(private store: Store<sharedAppState>) { 
    this.currentStep$ = this.store.select(getCurrentStep)
    this.newSubgenre$ = this.store.select(isNewSubgenreAdded)
    this.finalStep$ = this.store.select(isFinalStep)
  }
  handleStepProgress(step: number | null) {
    if(step && step > 1) return true
    return false
  }
  ngOnInit(): void {
  }

}
