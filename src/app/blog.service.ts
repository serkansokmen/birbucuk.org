import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BlogService {

  constructor(private http: Http) {}

  getPostList() {
    return this.http.get(`/assets/blog.json`)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  getPostDetail(slug: string) {
    return this.http.get(`/assets/blog.json`)
              .toPromise()
              .then(response => {
                let json = response.json();
                let posts = json['posts'];
                return posts.filter((post) => post.slug == slug)[0] || false
              })
              .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
