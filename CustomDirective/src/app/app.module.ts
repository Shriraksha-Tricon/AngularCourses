import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { setBackgroundDirective } from './CustomDirectives/setbackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
