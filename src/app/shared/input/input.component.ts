import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input('placeholder') placeholder!: string;
  @Input('needTrim') trim!: string;
  @Input('type') type!: string;

  ngOnInit(): void {
  }

}
