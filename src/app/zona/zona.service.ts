import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ZonaDetail } from './zona-detail';


@Injectable({
  providedIn: 'root'
})
export class ZonaService {
  private apiURL: string = environment.baseURL + 'zonas';

constructor(private http: HttpClient) { }

  getZonas(): Observable<ZonaDetail[]> {
    return this.http.get<ZonaDetail[]>(this.apiURL);


  }
}
