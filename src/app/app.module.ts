import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';

import { TShirtDetailsComponent } from './tshirt-details/tshirt-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TShirtDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }