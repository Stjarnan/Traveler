import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecentAttractionsComponent } from './components/recent-attractions/recent-attractions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecentAttractionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
