import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-success-submition',
  templateUrl: './success-submition.component.html',
  styleUrls: ['./success-submition.component.scss']
})
export class SuccessSubmitionComponent implements OnInit {

  constructor(private genreService: GenreService) { }
  startNewBookSubmition() {
    this.genreService.newSubmition()
  }
  ngOnInit(): void {
  }

}
