import { Component, OnInit } from '@angular/core';
import { RecentService } from '../../services/recent.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  searchVal: string;
  countries: string;

  constructor(private recentService: RecentService ) { }

  ngOnInit() {
  }

  searchDB(): void {
    this.recentService.getByCountry(this.searchVal)
    .subscribe( data => this.countries = data );
  }

}
