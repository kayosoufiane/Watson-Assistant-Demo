import { Component, OnInit } from '@angular/core';

import { Message } from '@app/models';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('400ms ease-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AssistantComponent implements OnInit {
  message: Message;
  messages: Message[];
  displayChat = false;
  firstDisplayed = true;

  constructor() {
    this.message = new Message();
    this.messages = [];
  }

  ngOnInit() {
  }

  onClick() {
    this.displayChat = !this.displayChat;
  }

}
