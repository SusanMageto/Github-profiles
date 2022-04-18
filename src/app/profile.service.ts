import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username!: string;
  clientid = '';
  clientsecret = '';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'SusanMageto';
  }

  getProfileInfo() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username +
        '?client_id=' +
        this.clientid +
        '&clientsecret=' +
        this.clientsecret
    );
    .pipe(map((res:any)=>res));
  }
}
