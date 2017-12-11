import { Component, OnInit } from '@angular/core';

import { RecentService } from '../../services/recent.service';

@Component({
  selector: 'app-recent-attractions',
  templateUrl: './recent-attractions.component.html',
  styleUrls: ['./recent-attractions.component.css']
})
export class RecentAttractionsComponent implements OnInit {

  recent: string[];

  constructor(private recentService: RecentService) { }

  ngOnInit() {
    console.log(this.getRecent());
  }

  getRecent(): void {
    this.recent = this.recentService.getRecent();
  }

}
