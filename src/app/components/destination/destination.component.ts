import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecentService } from '../../services/recent.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destination: string;
  country: string;
  image: string;
  description: string;
  attractions: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recentService: RecentService) {
      this.route
      .queryParams
      .subscribe(params => {
        this.destination = params['id'];
        this.country = params['country'];
        this.image = params['image'];
        this.description = params['description']
      });
     }

  ngOnInit() {
    this.recentService.getByDestination(this.destination)
      .subscribe( data => this.attractions = data );
  }
}
