import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecentAttractionsComponent } from './components/recent-attractions/recent-attractions.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { RecentService } from './services/recent.service';
import { CountriesComponent } from './components/countries/countries.component';
import { DestinationComponent } from './components/destination/destination.component';
import { NoRouteFoundComponent } from './components/no-route-found/no-route-found.component';


const routes: Routes = [
  { path: '', component: RecentAttractionsComponent },
  { path: 'Home', component: RecentAttractionsComponent },
  { path: 'Destinations', component: DestinationsComponent },
  { path: 'Countries', component: CountriesComponent },
  { path: 'Destination/:id', component: DestinationComponent },
  { path: '**', component: NoRouteFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecentAttractionsComponent,
    DestinationsComponent,
    CountriesComponent,
    DestinationComponent,
    NoRouteFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
