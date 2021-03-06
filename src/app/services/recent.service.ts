import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecentService {

  constructor(private http: HttpClient) {}

   getRecent(): Observable<any> {
     return this.http.get('http://localhost:3000/api/getall');
   }

   getByDestination(query): Observable<any> {
     return this.http.get('http://localhost:3000/api/destination/' + query );
   }

   getByCountry(query): Observable<any> {
    return this.http.get('http://localhost:3000/api/country/' + query );
  }

}
