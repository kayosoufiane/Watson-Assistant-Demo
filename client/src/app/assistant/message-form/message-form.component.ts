import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Message, Context, Attachment } from '@app/models';
import { AssistantService } from '@app/assistant/services';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input()
  messages: Message[];
  @Input()
  message: Message;
  context: Context;

  @Input()
  firstDisplayed;
  @Output()
  firstDisplayedChange = new EventEmitter<boolean>();

  constructor(private assistantService: AssistantService) {}

  ngOnInit() {
    this.message = new Message();
    if (this.firstDisplayed) {
      this.assistantService.message('', null).subscribe(async data => {
        this.firstDisplayedChange.emit(false);
        this.displayDots('watson');
        await this.displayMessage(data.output.text[0]);
      });
    }
  }

  sendMessage() {
    // send the user message
    this.message.sentBy = 'user';
    this.messages.push(this.message);
    this.scroll();

    // Get Watson's response from the Assistant Service
    this.assistantService.message(this.message.text, this.context).subscribe(async data => {
      this.context = data.context;

      // If the message is sent by Discovery
      if (data.output.attachment) {
        this.displayDots('discovery');
        await this.displayDiscoveryMessage(data.output.attachment);
      } else {
        for (const textstr of data.output.text) {
          this.displayDots('watson');
          await this.displayMessage(textstr);
        }
      }
    });

    // Create a new message to clear the input
    this.message = new Message();
  }

  displayDots(sentBy: string): void {
    this.messages.push(new Message('...', sentBy));
    this.scroll();
  }

  displayMessage(textstr: string): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.messages[this.messages.length - 1].text = textstr;
        this.scroll();
        resolve();
      }, textstr.length * 60 > 3000 ? 3000 : textstr.length * 60);
    });
  }

  displayDiscoveryMessage(attachment: Attachment): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.messages[this.messages.length - 1].text = 'Voici ce que j\'ai trouvé dans ma base documentaire';
        this.messages[this.messages.length - 1].url = attachment.url;
        this.messages[this.messages.length - 1].title = attachment.title;
        this.scroll();
        resolve();
      }, attachment.title.length * 60 > 3000 ? 3000 : attachment.title.length * 60);
    });
  }

  scroll() {
    const messages = document.getElementById('scroll');
    setTimeout(() => {
      messages.scrollTo({
        top: messages.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  }

}
