import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework1Component } from './homework1/homework1.component';
import { DatePipe } from './homework1/date.pipe';
import { BackgroundColorChangerDirective } from './homework1/background-color-changer.directive';
import { Homework2Component } from './homework2/homework2.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    DatePipe,
    BackgroundColorChangerDirective,
    Homework2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
