import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  readonly apiUrl = 'http://localhost:3000/agendamentos'
  constructor(private http: HttpClient) { }

  get(idClinica: string) : Observable<any>{
    console.log(idClinica);
    return this.http.get<any>(this.apiUrl + `?idClinica=${idClinica}`);
  }
}
