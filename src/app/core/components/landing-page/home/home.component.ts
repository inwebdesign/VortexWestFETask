import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { startLibrary } from 'src/app/store/actions/shared.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }
  enterLibrary() {
    this.store.dispatch(startLibrary());
  }
  ngOnInit(): void {
  }

}
