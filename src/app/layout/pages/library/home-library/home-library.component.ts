import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isBookSubmited } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-home-library',
  templateUrl: './home-library.component.html',
  styleUrls: ['./home-library.component.scss']
})
export class HomeLibraryComponent implements OnInit {
  isBookSubmitedSuccess$!: Observable<boolean>
  constructor(private store: Store<sharedAppState>) { 
    this.isBookSubmitedSuccess$ = this.store.select(isBookSubmited)
  }

  ngOnInit(): void {
  }

}
