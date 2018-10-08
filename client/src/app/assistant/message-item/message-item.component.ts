import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

import { Message } from '@app/models';
import { CloudantService } from '@app/assistant/services';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input()
  message: Message;
  @Input()
  messages: Message[];

  @Output()
  labelClicked = new EventEmitter<string>();

  constructor(private cloudantService: CloudantService, private modalService: NzModalService) { }

  ngOnInit() {
  }

  sendFeedback() {
    this.cloudantService.addDocument(this.message).subscribe(data => {
      if (data.ok) {
        this.modalService.success({
          nzTitle: 'Thank you for your feedback !',
          nzContent: 'We have registered your feedback, our team will work to avoid this problem in the future'
        });
      } else {
        this.modalService.error({
          nzTitle: 'Something went wrong...',
          nzContent: 'We couldn\'t register your feed back, please ty later'
        });
      }
    });
  }

  onLabelClicked(text: string) {
    this.labelClicked.emit(text);
  }
}
