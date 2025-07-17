import {Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResData } from './shared-model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'database.json';
  database = signal(null);
  // posts = signal([]);
  posts! :ResData[];

  constructor(private http : HttpClient){}

  getData(){
    this.http.get(this.url).subscribe({
      next:(val:any) => {
        this.database.set(val);
        this.posts = val?.posts
      }
    })
  }

  getPosts(){
    return this.posts
  }

}
