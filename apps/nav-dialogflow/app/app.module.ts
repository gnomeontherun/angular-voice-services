import {BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxVoiceModule, NgxVoiceWebSpeechModule, NgxVoiceWebTextModule, NgxVoiceGoogleIntentModule} from 'ngx-voice';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page3Component} from './pages/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxVoiceModule,
    NgxVoiceModule,
    NgxVoiceWebSpeechModule.forRoot(),
    NgxVoiceWebTextModule.forRoot(),
    NgxVoiceGoogleIntentModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

