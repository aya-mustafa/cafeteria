import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Checks } from '../interfaces/checks';



@Injectable({
  providedIn: 'root'
})
export class ChecksService {

  constructor(private _http:HttpClient) { }
  getChecks(): Observable<Checks[]>{
    return this._http.get <Checks[]>("http://localhost/REST_api/Cafe-Api/controllers/checks/read.php");
  }
}
