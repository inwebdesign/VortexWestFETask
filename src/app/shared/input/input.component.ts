import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GenreService } from 'src/app/layout/pages/library/genre.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private genreService: GenreService) { }
  @Input('placeholder') placeholder!: string;
  @Input('subgenre') subgenre!: string;
  @Input('short') short!: boolean;
  @Input('small') small!: boolean;
  @Input('needTrim') trim!: string;
  @Input('type') type!: string;
  @Input('control') control!: FormControl;

  get genrService () {
    return this.genreService;
  }
  ngOnInit(): void {
  }

}
