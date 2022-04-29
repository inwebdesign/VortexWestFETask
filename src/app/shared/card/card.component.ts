import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres } from 'src/app/models/genres';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input('genres') genres!: Observable<ReadonlyArray<Genres>>
  ngOnInit(): void {
  }

}
