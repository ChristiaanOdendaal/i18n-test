import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TRANSLATIONS, LOCALE_ID, TRANSLATIONS_FORMAT, MissingTranslationStrategy } from '@angular/core';
import { I18n, MISSING_TRANSLATION_STRATEGY } from '@ngx-translate/i18n-polyfill';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

declare const require;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // format of translations that you use, not needed if using AOT
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
    // locale id that you're using (default en-US) ALWAYS NEEDED
    {provide: LOCALE_ID, useValue: environment.config.language},
    // optional, defines how error will be handled
    //{provide: MISSING_TRANSLATION_STRATEGY, useValue: MissingTranslationStrategy.Error},

    {provide: TRANSLATIONS,
    useFactory: (locale) => {
      locale = locale || 'en'; // default to english if no locale provided
      return require(`raw-loader!../locale/messages.${locale}.xlf`);
    },
    deps: [LOCALE_ID]},
    I18n],
  bootstrap: [AppComponent]
})
export class AppModule { }
