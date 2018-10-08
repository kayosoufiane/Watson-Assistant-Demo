import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '@app/models';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input()
  messages: Message[];

  @Output()
  labelClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onLabelClicked(text: string) {
    this.labelClicked.emit(text);
  }

}
