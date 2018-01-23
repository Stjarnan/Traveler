import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecentAttractionsComponent } from './components/recent-attractions/recent-attractions.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { RecentService } from './services/recent.service';
import { CountriesComponent } from './components/countries/countries.component';


const routes: Routes = [
  { path: '', component: RecentAttractionsComponent },
  { path: 'Home', component: RecentAttractionsComponent },
  { path: 'Destinations', component: DestinationsComponent },
  { path: 'Countries', component: CountriesComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecentAttractionsComponent,
    DestinationsComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [
    RecentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
