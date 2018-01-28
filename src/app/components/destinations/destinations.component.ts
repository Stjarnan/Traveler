import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  searchVal: string;
  data: string;

  constructor() { }

  ngOnInit() {
  }

  searchDB(): void {
    this.data = this.searchVal;
  }

}
