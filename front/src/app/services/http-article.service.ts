import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(
    @Inject('Window') protected window: Window,
    private http: HttpClient
  ) {
    super(window);
    this.retrieveAll();
  }

  refresh() {
    super.refresh();
    this.retrieveAll();
  }

  retrieveAll() {
    this.http.get<Article[]>('/ws/articles').subscribe({
      next: (articles) => {
        this.articles$.next(articles);
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  add(article: Article) {
    super.add(article);
    this.http
      .post<void>('/ws/articles', article)
      .subscribe({
        next: () => {
          this.refresh();
        },
        error: (err) => {
          console.error('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  remove(selectedIds: string[]): void {
    super.remove(selectedIds);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: selectedIds,
    };
    this.http
      .delete<void>('/ws/articles', options)
      .subscribe({
        next: () => {
          this.refresh();
        },
        error: (err) => {
          console.error('err: ', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
