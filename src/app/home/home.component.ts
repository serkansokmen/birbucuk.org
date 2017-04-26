import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BlogService]
})
export class HomeComponent implements OnInit {

  posts: any[];

  constructor(private service: BlogService) { }

  ngOnInit() {
    this.service.getPostList().then((response) => {
      this.posts = response.posts;
    });
  }

}
