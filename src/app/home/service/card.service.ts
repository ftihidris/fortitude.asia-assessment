import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCardData(section: string): Observable<Card[]> {
    return this.http.get<Card[]>(`http://localhost:3000/${section}`).pipe(
      map(data => data || [])
    );
  }
  
}
