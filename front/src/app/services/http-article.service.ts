import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class HttpArticleService extends ArticleService {

  constructor(private http: HttpClient) {
    super();
    console.log('instantiated http article service');
    this.refresh();
  }

  refresh() {

  }
}
