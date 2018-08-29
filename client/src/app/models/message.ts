export class Message {
  text: string;
  sentBy: string;
  emotion: string;
  intent: string;
  url: string;
  title: string;

  constructor(
    text?: string,
    sentBy?: string,
    emotion?: string,
    intent?: string,
    url?: string,
    title?: string,
  ) {
    this.text = text;
    this.sentBy = sentBy;
    this.emotion = emotion;
    this.intent = intent;
    this.url = url;
    this.title = title;
  }
}
