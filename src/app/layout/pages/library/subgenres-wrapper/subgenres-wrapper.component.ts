import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSubgenresRequest } from 'src/app/store/actions/shared.actions';
import { sharedAppState } from 'src/app/store/state';

@Component({
  selector: 'app-subgenres-wrapper',
  templateUrl: './subgenres-wrapper.component.html',
  styleUrls: ['./subgenres-wrapper.component.scss']
})
export class SubgenresWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
