import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('instantiated http article service');
    this.refresh();
  }

  refresh() {
    console.log('start refresh');
    this.http.get('http://localhost:3000/ws/articles').subscribe({
      next: (data) => {
        console.log('data: ', data);
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
