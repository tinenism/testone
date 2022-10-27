import { Component, OnInit } from '@angular/core';
import { Post } from '../model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers:[PostService]
})
export class PostListComponent implements OnInit {
postList:Post[]=[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postList=this.postService.getPost();
  }

}
