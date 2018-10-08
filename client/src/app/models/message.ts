import { Option } from '@app/models';

export class Message {
  text: string;
  sentBy: string;
  emotion: string;
  intent: string;
  url: string;
  title: string;
  description: string;
  options: Option[];

  constructor(
    text?: string,
    sentBy?: string,
    emotion?: string,
    intent?: string,
    url?: string,
    title?: string,
    description?: string,
    options?: Option[],
  ) {
    this.text = text;
    this.sentBy = sentBy;
    this.emotion = emotion;
    this.intent = intent;
    this.url = url;
    this.title = title;
    this.description = description;
    this.options = options;
  }
}
