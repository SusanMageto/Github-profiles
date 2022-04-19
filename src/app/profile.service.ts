import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  username: string;


  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'SusanMageto';
  }

<<<<<<< HEAD
  private username!:string;
  clientid = '';
  clientsecret = '';
=======
  getProfileInfo() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username 
    )
    .pipe(map((res:any)=>res));
  }
>>>>>>> master

  getProfileRepos() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username + '/repos'
    )
    .pipe(map((res:any)=>res));
  }

  myUpdate (username:string){
    this.username= username;
  }
}
