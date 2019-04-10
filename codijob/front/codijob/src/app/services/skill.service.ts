import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { variables } from '../config/variables';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private _http:HttpClient) { }
  getAll():Observable<any>{
    let url = `${variables.serverBackProduction}/api/skill/getAll`;
    return this._http.get(url);
  }
}