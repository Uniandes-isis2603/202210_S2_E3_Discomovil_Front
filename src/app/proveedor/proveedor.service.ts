import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }
getProveedores(): Observable<Proveedor[]> {
  return this.http.get<Proveedor[]>(this.apiUrl);
}

}
