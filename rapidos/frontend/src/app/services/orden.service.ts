import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenI } from '../models/orden';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  private baseUrl = 'http://127.0.0.1:8000/ordenes/'; // Base URL for API

  constructor(private http: HttpClient) {}

  getAllOrdenes(): Observable<OrdenI[]> {
    return this.http.get<OrdenI[]>(this.baseUrl);
  }

  getOrdenById(id: number): Observable<OrdenI> {
    return this.http.get<OrdenI>(`${this.baseUrl}${id}/`);
  }

  createOrden(orden: OrdenI): Observable<OrdenI> {
    return this.http.post<OrdenI>(this.baseUrl, orden);
  }

  updateOrden(id: number, orden: OrdenI): Observable<OrdenI> {
    return this.http.put<OrdenI>(`${this.baseUrl}${id}/`, orden);
  }

  deleteOrden(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
