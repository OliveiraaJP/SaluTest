import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from '../types/Clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicasService {
  private apiUrl = 'http:lovalhost:3000/clinicas'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clinica[]>{
    return this.http.get<Clinica[]>(this.apiUrl);
  }
}
