import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  clientid = '';
  clientsecret = '';


  constructor(private http: HttpClient) { }
}
