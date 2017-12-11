import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecentAttractionsComponent } from './components/recent-attractions/recent-attractions.component';

import { RecentService } from './services/recent.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecentAttractionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RecentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
