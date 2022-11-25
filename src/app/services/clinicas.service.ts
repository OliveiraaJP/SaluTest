import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from '../types/Clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicasService {
  readonly apiUrl = 'http://localhost:3000/clinicas'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.apiUrl);
  }

  delete(clinica: Clinica): Observable<any> {
    const body = clinica;
    body.status = "Inativo";
    return this.http.put<any>(this.apiUrl + `/${clinica.id}`, body);
  }

  postClinica(clinica: Clinica): Observable<Clinica>{
    return this.http.post<Clinica>(this.apiUrl, clinica)
  }

  active(clinica:Clinica): Observable<any>{
    const body = clinica;
    body.status = "Ativo";
    return this.http.put<any>(this.apiUrl + `/${clinica.id}`, body);
  }
}
