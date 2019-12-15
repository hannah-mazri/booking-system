import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RateComponent } from './rate/rate.component';
import { TncComponent } from './tnc/tnc.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    RateComponent,
    TncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
