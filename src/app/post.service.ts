import { Injectable } from '@angular/core';
import { Post } from './model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
postList: Post[]=[
  new Post(
    'Title',
    'descriptionssss',
    '../assets/img/a.jpg',
    'Author: tinenism',
    new Date
    
  )
]
  getPost(){
    return this.postList
  }
}
