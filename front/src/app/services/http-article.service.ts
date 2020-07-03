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
    this.http.get<Article[]>('http://localhost:3000/ws/articles').subscribe({
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
      .post<void>('http://localhost:3000/ws/articles', article)
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

  remove(selectedArticles: Article[]): void {
    const ids = selectedArticles.map((a) => a.id);
    super.remove(selectedArticles);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    this.http
      .delete<void>('http://localhost:3000/ws/articles', options)
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
