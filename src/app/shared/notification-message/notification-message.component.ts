import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent implements OnInit {

  constructor() { }
  @Input('class') class!: string;
  @Input('template') template!: string;
  ngOnInit(): void {
  }

}
