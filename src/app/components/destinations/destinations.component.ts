import { Component, OnInit } from '@angular/core';

import { RecentService } from '../../services/recent.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  searchVal: string;
  data: string;

  constructor(private recentService: RecentService ) { }

  ngOnInit() {
  }

  searchDB(): void {
    this.data = this.searchVal;
    this.recentService.getByDestination(this.searchVal)
    .subscribe( data => console.log(data));
  }

}
