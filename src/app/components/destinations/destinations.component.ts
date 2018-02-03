import { Component, OnInit } from '@angular/core';

import { RecentService } from '../../services/recent.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  searchVal: string;
  destinations: string;

  constructor(private recentService: RecentService ) { }

  ngOnInit() {
  }

  searchDB(): void {
    this.recentService.getByDestination(this.searchVal)
    .subscribe( data => this.destinations = data );
  }

}
