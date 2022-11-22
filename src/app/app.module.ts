import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PedalsComponent } from './pedals/pedals.component';
import { PedalDetailComponent } from './pedal-detail/pedal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PedalsComponent,
    PedalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
