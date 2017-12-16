import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecentService {

  recent: string[];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/getall').subscribe( data => {
      this.recent = data['result']
    }); // End of http req
   } // End of constructor

   getRecent(): any {
     return this.recent;
   }

}
