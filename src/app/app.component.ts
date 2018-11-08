import { Component, OnInit } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'i18n-polyfilltest';
  messagebase = 'Hello world! Welcome!';
  translationStatus;
  messageTranslated;
  diceroll;
  messageone;
  messagetwo;
  messagereceived;
  random;
  rollmessage;

  constructor(i18n: I18n) {
    this.translationStatus = i18n('This is the English translation');
    this.messageTranslated = i18n('Hello world! Welcome!');

    const random = Math.round(Math.random()) + 1;
    this.diceroll = 'Rolled for message, got ' + random;
    this.messageone = i18n('Message one received!');
    this.messagetwo = i18n('Message two received!');
    if (random === 1) {
      this.messagereceived = this.messageone;
    } else {
      this.messagereceived = this.messagetwo;
    }
  }

  ngOnInit() {
  }
}
