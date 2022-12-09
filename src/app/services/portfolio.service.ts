import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hobbies, Skills } from '../pages/components/cards/cards.component';
import { Formacion } from '../pages/formacion/formacion.component';
import { Github } from '../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  language: string = "es"
  url:string = "https://api.github.com/users/Metaldev-06"

  constructor( private http: HttpClient) { }

  translate(): Observable<any> {
    return this.http.get<any>(`assets/translate/translate.json`)
  }

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`assets/datos/skills.json`)
  }

  getFormacion(): Observable<Formacion[]> {
    return this.http.get<Formacion[]>(`assets/datos/formacion.json`)
  }

  getHobbies(): Observable<Hobbies[]> {
    return this.http.get<Hobbies[]>(`assets/datos/hobbies.json`)
  }

  getGithubPage(): Observable<Github> {
    return this.http.get<Github>(`${this.url}`)
  }
}
