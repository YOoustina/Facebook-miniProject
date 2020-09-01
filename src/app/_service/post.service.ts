import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: any = [];

  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
   return this.httpClient.get('../../assets/data.json');
  }
}
