import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { descriptionRequired } from 'src/app/store/actions/shared.actions';
import { isDescriptionRequired } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.resetDescription()
  }

}
