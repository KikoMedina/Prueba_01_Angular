import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedalsComponent } from './pedals/pedals.component';
import { PedalDetailComponent } from './pedal-detail/pedal-detail.component';
import { PedalSearchComponent } from './pedal-search/pedal-search.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PedalsComponent,
    PedalDetailComponent,
    MessagesComponent,
    PedalSearchComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
