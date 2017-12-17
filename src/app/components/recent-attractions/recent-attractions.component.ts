import { Component, OnInit } from '@angular/core';

import { RecentService } from '../../services/recent.service';

@Component({
  selector: 'app-recent-attractions',
  templateUrl: './recent-attractions.component.html',
  styleUrls: ['./recent-attractions.component.css']
})
export class RecentAttractionsComponent implements OnInit {

  recent: any;

  constructor(private recentService: RecentService) { }

  ngOnInit() {
    this.getRecent();
  }

  getRecent(): void {
    this.recentService.getRecent()
    .subscribe(data => this.recent = data );
  }

}
