import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailDTO } from '../models/detail.dto';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getAllDetails(): Observable<DetailDTO[]> {
    return this.http.get<DetailDTO[]>(
      'https://rickandmortyapi.com/api/character/[1,2,3,4,5,7,8,9,10,11,12,14]'
    );
  }

  getDetailById(id: String): Observable<DetailDTO> {
    return this.http.get<DetailDTO>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
